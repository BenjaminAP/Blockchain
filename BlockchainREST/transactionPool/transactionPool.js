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

    getValidTransactions() {
        let validTransactions = [];

        this.transactions.forEach(transaction => {

            let totalAmountSent = 0;

            for (let i = 0; i < transaction.output.recipients.length; i++) {
                let recipient = transaction.output.recipients[i];
                totalAmountSent += recipient.amountReceived;
                console.log(totalAmountSent);
            }

            if (transaction.getInputCurrentAmount() - totalAmountSent != transaction.getSenderExpectedBalance()) {
                console.error(`Invalid Transac: ${transaction}`);
            }else if (!Transaction.verifyTransaction(transaction)) {
                console.error(`Invalid Transac2: ${transaction}`);
            } else {
                validTransactions.push(transaction);
            }

        });

        console.log(validTransactions);
        return validTransactions;
    }
}

module.exports = TransactionPool;