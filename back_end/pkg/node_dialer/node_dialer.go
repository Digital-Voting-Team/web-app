package node_dialer

import (
	"encoding/json"
	"github.com/Digital-Voting-Team/node-connector/pkg/node"
	"github.com/gorilla/websocket"
	"io"
	"log"
	"net/http"
	"net/url"
)

type Dialer struct {
	nodeConnectorHostname string
	currentNodeHostname   string

	upgrader websocket.Upgrader
}

func NewDialer(nodeConnectorHostname string) *Dialer {
	return &Dialer{
		nodeConnectorHostname: nodeConnectorHostname,
		upgrader:              websocket.Upgrader{},
	}
}

// DialNodeConnector dials node connector
func (d *Dialer) DialNodeConnector() error {
	// send GET request to node connector
	url := "http://" + d.nodeConnectorHostname + "/nodes"
	response, err := http.Get(url)
	if err != nil {
		return err
	}

	defer func(Body io.ReadCloser) {
		err = Body.Close()
		if err != nil {
			log.Println(err.Error())
		}
	}(response.Body)

	s := struct {
		Nodes []node.Node `json:"node_list"`
	}{}

	err = json.NewDecoder(response.Body).Decode(&s)
	if err != nil {
		return err
	}

	if len(s.Nodes) > 0 {
		d.currentNodeHostname = s.Nodes[0].Hostname
	}

	return nil
}

// send json data to current node
func (d *Dialer) SendJsonDataToCurrentNode(data any, endpoint string) error {
	u := url.URL{Scheme: "ws", Host: d.currentNodeHostname, Path: endpoint}
	log.Printf("connecting to %s", u.String())

	// Establish a WebSocket connection
	conn, _, err := websocket.DefaultDialer.Dial(u.String(), nil)
	if err != nil {
		return err
	}

	defer func(conn *websocket.Conn) {
		err = conn.Close()
		if err != nil {
			log.Println("close:", err)
		}
	}(conn)

	// Send nodes list to the currentNode in JSON format
	err = conn.WriteJSON(data)
	if err != nil {
		return err
	}

	//close connection
	err = conn.WriteMessage(websocket.CloseMessage, websocket.FormatCloseMessage(websocket.CloseNormalClosure, ""))
	if err != nil {
		return err
	}

	return nil
}
