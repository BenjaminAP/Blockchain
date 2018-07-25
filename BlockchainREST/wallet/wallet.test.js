const Wallet = require('./wallet');
const TransactionPool = require('../transactionPool/transactionPool');

describe('Wallet Test', () => {

    const wallet = new Wallet();
    const recipient = 'reci-pient';
    const amount = 30;
    const tPool =  new TransactionPool();
    let transaction;

    wallet.createTransaction(recipient, amount, tPool);

    describe('First Transaction', () => {

        beforeEach(() => {
            transaction = tPool.getTransactionByAddress(wallet.publicKey);
        });

        it('Transaction in pool', () => {
            expect(transaction.getInputAddress()).toEqual(wallet.publicKey);
        });

        it('transaction amount correct', () => {
            expect(transaction.getSenderExpectedBalance()).toEqual(wallet.balance - amount);
        });

        describe('Another Transaction', () => {

            beforeEach(() => {
                wallet.createTransaction(recipient, amount, tPool);
                transaction = tPool.getTransactionByAddress(wallet.publicKey);
            });

            it('transaction sender with expected balance to be amount*2 less', () => {
                expect(transaction.getSenderExpectedBalance()).toEqual(wallet.balance - (amount + amount));
            });
        });
    });
});