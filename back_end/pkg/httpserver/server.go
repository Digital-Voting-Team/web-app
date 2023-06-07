package httpserver

import (
	"github.com/Digital-Voting-Team/Digital-Voting/pkg/signature/keys"
	"github.com/Digital-Voting-Team/web-app/back_end/pkg/node_dialer"
	"github.com/Digital-Voting-Team/web-app/back_end/pkg/service"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"log"
	"net/http"
)

type Server struct {
	e             *echo.Echo
	signerService *service.Service
	nodeDialer    *node_dialer.Dialer
}

func NewServer(nodeConnectorHostname string) *Server {
	e := echo.New()

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
	}))

	e.HideBanner = true

	return &Server{
		e:             e,
		signerService: service.NewService(),
		// TODO: change to env variable
		nodeDialer: node_dialer.NewDialer(nodeConnectorHostname),
	}
}

// registerEndpoints register server endpoints
func (s *Server) registerEndpoints() {
	s.e.POST("/register", s.register)
}

func (s *Server) register(c echo.Context) error {
	type request struct {
		Bytes keys.PrivateKeyBytes `json:"bytes"`
	}
	log.Println("register")
	var req request
	err := c.Bind(&req)
	if err != nil {
		return err
	}

	txRegistration := s.signerService.CreateAccountCreationTransaction(req.Bytes)

	err = s.nodeDialer.SendJsonDataToCurrentNode(txRegistration, "/transaction")
	if err != nil {
		return err
	}

	return c.JSON(http.StatusOK, txRegistration)
}

func (s *Server) Start(port string) error {
	s.registerEndpoints()
	// TODO: try till success
	err := s.nodeDialer.DialNodeConnector()
	if err != nil {
		return err
	}
	return s.e.Start(":" + port)
}
