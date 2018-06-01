const Wallet = require('../wallet');
const Transaction = require('./transaction');
const ChainUtil = require('../../utils/chain_util');

describe('Transaction', () => {

    let wallet1,
        recipient,
        amount,
        transaction;

    beforeEach(() => {
       wallet1 = new Wallet();
       recipient = 'fsdag334g';
       amount = 30;
       transaction = Transaction.newTransaction(wallet1, recipient, amount);
       Transaction.signTransaction(transaction, wallet1);
    });

    it('Output sender public key(address is correct', () => {
        const sender = transaction.getOutputSender();
        expect(sender.address).toEqual(wallet1.publicKey);
    });

    it('Output sender has expected balance', () =>{
        const sender = transaction.getOutputSender();
        expect(sender.expectedBalance).toEqual(wallet1.balance - amount);
    });

    it('Output recipient address correct', () => {
        const outRecipient = transaction.getOutputRecipient(recipient);
        expect(outRecipient.address).toEqual(recipient);
    });

    it('Output recipient amount received correct', () => {
        const outRecipient = transaction.getOutputRecipient(recipient);
        expect(outRecipient.amountReceived).toEqual(amount);
    });

    it('Transaction input current amount equals sender balance', () => {
        expect(transaction.input.currentAmount).toEqual(wallet1.balance);
    });

    it('Transaction input address equals senders public key', () => {
        expect(transaction.input.address).toEqual(wallet1.publicKey);
    });

    it('Validates transaction signature', () => {
       expect(Transaction.verifyTransaction(transaction))
           .toBe(true);
    });

    it('Invalidates corrupt transaction', () => {
        transaction.output.recipient[0].amountReceived = 60000;
        expect(Transaction.verifyTransaction(transaction))
            .toBe(false);
    });
});