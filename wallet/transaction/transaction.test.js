const Wallet = require('../wallet');
const Transaction = require('./transaction');

describe('Transaction', () => {

    let wallet1,
        recipient,
        amount,
        transaction;

    beforeEach(() => {
       wallet1 = new Wallet();
       recipient = 'fsdag334g';
       amount = 30;
       transaction = new Transaction(wallet1, recipient, amount);
    });

    it('Sender public key is correct', () => {
        const sender = JSON.parse(transaction.transactionOutputSender());
        expect(sender.address).toEqual(wallet1.publicKey);
    });

});