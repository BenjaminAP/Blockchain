const Wallet = require('./wallet');
const TransactionPool = require('../wallet/transactionPool/transactionPool');

describe('Wallet Test', () => {

    let wallet,
        tPool,
        recipient,
        amount,
        transaction;

    describe('First Transaction', () => {
        beforeEach(() => {
            wallet = new Wallet();
            recipient = 'reci-pient';
            amount = 30;
            tPool =  new TransactionPool();
            transaction = wallet.createTransaction(recipient, amount, tPool);
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
                transaction = wallet.createTransaction(recipient, amount, tPool);
                transaction = tPool.getTransactionByAddress(wallet.publicKey);
            });

            it('transaction sender with expected balance to be amount*2 less', () => {
                expect(transaction.getSenderExpectedBalance()).toEqual(wallet.balance - (amount + amount));
            });
        });
    });
});