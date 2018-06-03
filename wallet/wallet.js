const ChainUtil = require('../utils/chain_util');
const Transaction = require('../wallet/transaction/transaction');
const { INIT_BALANCE } =  require('../config');

class Wallet {
    constructor() {
        this.balance = INIT_BALANCE;
        this.keyPare = ChainUtil.generateKeyPare();
        this.publicKey = this.keyPare.getPublic().encode('hex');
    }

    sign(hashData) {
        return this.keyPare.sign(hashData);
    }

    createTransaction(recipient, amount, tPool) {

        if (amount > this.balance) {
            console.log(`Amount larger than balance. Can't process`);
        }

        let transaction = tPool.getTransactionFromAddress(this.publicKey);

        if (transaction) {
            transaction = transaction.updateTransaction(this, recipient, amount);
        } else {
            transaction = Transaction.newTransaction(this, recipient, amount);
            Transaction.signTransaction(transaction, this);
        }

        tPool.updateAddTransaction(transaction);

        return transaction;
    }

    toString() {
        return `Wallet: 
            balance     : ${this.balance}
            keyPare     : ${JSON.stringify(this.keyPare)}
            publicKey   : ${JSON.stringify(this.publicKey)}`
    }
}

module.exports = Wallet;