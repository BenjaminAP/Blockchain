const ChainUtil = require('../../utils/chain_util');
const OutDetails = require(`./output_details`);

class Transaction {
    constructor(senderWallet, recipient, amount) {

        this.id = ChainUtil.generateUID();
        this.input = null;
        this.output = new OutDetails(senderWallet, recipient, amount);
    }

    transactionOutputSender() {
        return JSON.stringify(this.output.sender);
    }

    toString() {
        return `Transaction:
            id      : ${this.id}
            input   : ${this.input}
            output  : ${this.output}`
    }

    // static newTransaction(senderWallet, recipient, amount) {
    //
    //     if (senderWallet.balance < amount){
    //         console.log("Amount send larger than balance.");
    //         return;
    //     }
    //
    //     let transaction = new Transaction();
    //     // const outDetails =
    //
    //     transaction.output = new OutDetails(senderWallet, recipient, amount);
    //
    //     return transaction;
    // }

    toString() {
        return `Transaction :
        id      : ${this.id}
        input   : ${this.input}
        output  : ${JSON.stringify(this.output)}`
    }
}

module.exports = Transaction;