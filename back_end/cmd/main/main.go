package main

import (
	"github.com/Digital-Voting-Team/web-app/back_end/pkg/httpserver"
	"log"
	"os"
)

// create dialer and dial node connector
//func main() {
//	// create dialer
//	d := node_dialer.NewDialer("localhost:8081")
//
//	// dial node connector
//	err := d.DialNodeConnector()
//	if err != nil {
//		log.Println(err.Error())
//	}
//
//	_ = d.SendJsonDataToCurrentNode(map[string]any{
//		"tx_type":     4,
//		"private_key": []byte{123, 123, 123, 25, 5, 123, 123},
//		"voting_link": []byte{1, 23, 123, 25, 5, 123, 123},
//		"answer":      2,
//	}, "/transaction")
//}

func main() {
	port := os.Getenv("PORT")
	nodeConnectorURL := os.Getenv("NODE_CONNECTOR_URL")

	s := httpserver.NewServer(nodeConnectorURL)
	err := s.Start(port)
	if err != nil {
		log.Panicln(err.Error())
	}
}
