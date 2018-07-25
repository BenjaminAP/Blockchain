const TransactionPool = require('./transactionPool');
const Transaction = require('../transaction/transaction');
const Wallet = require('../wallet/wallet');

describe('Transaction Pool', () => {

    let transaction,
        transactionPool,
        wallet;

    beforeEach(() => {
        wallet = new Wallet();
        transactionPool = new TransactionPool();
        transaction = Transaction.newTransaction(wallet, 'fsda-g334g', 30);
        Transaction.signTransaction(transaction, wallet);
        transactionPool.updateAddTransaction(transaction);
    });

    it('Added transaction to the tPool', () => {
        expect(transactionPool.getTransactionById(transaction.id)).toEqual(transaction);
    });

    it('Update transactions in the tPool', () => {
        const oldTransaction = transactionPool.getTransactionById(transaction.id);
        const newTransaction = transaction.updateTransaction(wallet,'newrecip', 50);

        transactionPool.updateAddTransaction(newTransaction);

        expect(JSON.stringify(transactionPool.getTransactionById(oldTransaction.id))).toEqual(JSON.stringify(newTransaction));
    });

});