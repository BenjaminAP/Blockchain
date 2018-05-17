const ChainUtil = require('../utils/chain_util');

class Transaction {
    constructor() {
        this.id = ChainUtil.generateUID();
        this.input = null;
        this.output = [];
    }

    toString() {
        return `Transaction:
            id      : ${this.id}
            input   : ${this.input}
            output  : ${this.output}`
    }

    static newTransaction(senderWallet, recipient, amount) {

        if (senderWallet.balance < amount){
            console.log("Amount send larger than balance.");
            return;
        }

        let transaction = new Transaction();

        transaction.output.push([
            {
                amount: senderWallet.balance - amount,
                address: senderWallet.publicKey
            },
            {
                amount,
                address: recipient
            }
        ]);

        return transaction;
    }
}