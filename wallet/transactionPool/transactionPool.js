const Transaction = require('../transaction/transaction');

class TransactionPool {
    constructor() {
        this.transactions = [];
    }

    getTransactionById(transId) {
        for (let i = 0; i < this.transactions.length; i++) {
            if (this.transactions[i].id === transId) {
                return this.transactions[i];
            }
        }
        return;
    }

    getTransactionIndexById(transId) {
        for (let i = 0; i < this.transactions.length; i++) {
            if (this.transactions[i].id === transId) {
                return i;
            }
        }
        return;
    }

    getTransactionByAddress(senderAddress) {
        for (let i = 0; i < this.transactions.length; i++) {
            if (this.transactions[i].getInputAddress() === senderAddress) {
                return this.transactions[i];
            }
        }

        return null;
    }

    updateAddTransaction(newTransaction) {
        let transactionIndex = this.getTransactionIndexById(newTransaction.id);

        if (transactionIndex >= 0) {
            this.transactions[transactionIndex] =  newTransaction;
        } else {
            this.transactions.push(newTransaction);
        }
    }
}

module.exports = TransactionPool;