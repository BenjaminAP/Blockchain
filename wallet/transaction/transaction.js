const ChainUtil = require('../../utils/chain_util');
const OutDetails = require(`./wallet/transaction/output_details`);
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
        const outDetails = new OutDetails(senderWallet, recipient, amount);

        transaction.output.push(outDetails);

        return transaction;
    }

    toString() {
        return `Transaction :
        id      : ${this.id}
        input   : ${this.input}
        output  : ${JSON.stringify(this.output)} `
    }
}

module.exports = Transaction;