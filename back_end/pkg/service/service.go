package service

import (
	"github.com/Digital-Voting-Team/Digital-Voting/pkg/blockchain/transaction"
	"github.com/Digital-Voting-Team/Digital-Voting/pkg/blockchain/transaction/transaction_specific"
	"github.com/Digital-Voting-Team/Digital-Voting/pkg/models/account"
	"github.com/Digital-Voting-Team/Digital-Voting/pkg/signature/curve"
	"github.com/Digital-Voting-Team/Digital-Voting/pkg/signature/keys"
	"github.com/Digital-Voting-Team/Digital-Voting/pkg/signer"
)

type Service struct {
	signer *signer.TransactionSigner
}

func NewService() *Service {
	return &Service{
		signer: signer.NewTransactionSigner(),
	}
}

// SignTransaction sign transaction using private key
func (s *Service) SignTransaction(tx *transaction.Transaction, key keys.PrivateKeyBytes) {
	s.signer.SignTransactionWithPrivateKey(key, tx)
}

// CreateAccountCreationTransaction create registration transaction using private key
func (s *Service) CreateAccountCreationTransaction(key keys.PrivateKeyBytes) transaction.ITransaction {
	keyPair := keys.FromPrivateKey(key, curve.NewCurve25519())
	tx := transaction.NewTransaction(
		transaction.AccountCreation,
		transaction_specific.NewTxAccCreation(account.User, keyPair.PublicToBytes()),
	)

	return tx
}
