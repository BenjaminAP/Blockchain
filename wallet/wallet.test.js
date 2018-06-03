const Wallet = require('./wallet');
const TransactionPool = require('../wallet/transactionPool/transactionPool');

describe('Wallet Test', () => {

    const wallet = new Wallet();
    let tPool = new TransactionPool();
    const recipient = 'reci-pient';
    const amount = 30;
    let transaction;

    beforeEach(() => {
       transaction = wallet.createTransaction(amount, recipient, tPool);
    });

    it('Transaction in pool', () => {
        expect(transaction.input.address).toEqual(wallet.publicKey);
    });
});