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
       Transaction.signTransaction(transaction, wallet1);
    });

    it('Output sender public key(address is correct', () => {
        const sender = JSON.parse(transaction.getOutputSender());
        expect(sender.address).toEqual(wallet1.publicKey);
    });

    it('Output sender has expected balance', () =>{
        const sender = JSON.parse(transaction.getOutputSender());
        expect(sender.expectedBalance).toEqual(wallet1.balance - amount);
    });

    it('Output recipient address correct', () => {
        const outRecipient = JSON.parse(transaction.getOutputRecipient());
        expect(outRecipient.address).toEqual(recipient);
    });

    it('Output recipient amount received correct', () => {
        const outRecipient = JSON.parse(transaction.getOutputRecipient());
        expect(outRecipient.amountReceived).toEqual(amount);
    });

    it('Transaction input amount equals sender balance', () => {
        expect(transaction.input.currentAmount).toEqual(wallet1.balance);
    });
});