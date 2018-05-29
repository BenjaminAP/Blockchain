const OutDetails = require(`./output_details`);
const InDetails = require(`./input_details`);
const ChainUtil = require('../../utils/chain_util');

class Transaction {
    constructor() {

        this.id = ChainUtil.generateUID();
        this.input = null;
        this.output = [];
    }

    getOutputSender() {
        return this.output[this.output.length - 1].sender;
    }

    getOutputRecipient() {
        return this.output[this.output.length - 1].recipient;
    }

    getOutput() {
        return this.output[this.output.length - 1];
    }

    static newTransaction(senderWallet, recipient, amount) {

        if (senderWallet.balance  < amount) {
            console.log('Senders balance lower than amount send');
            return;
        }

        const transaction = new this();

        transaction.output.push(new OutDetails(senderWallet, recipient, amount));
        return transaction;
    }

    static signTransaction(transaction, sendersWallet) {
        transaction.input = new InDetails(transaction, sendersWallet);
    }

    static verifyTransaction(transaction) {
        return ChainUtil.verifySignature(transaction.input.address,
                            transaction.input.signature,
                            ChainUtil.hash(transaction.getOutput()));
    }

    toString() {
        return `Transaction :
        id      : ${this.id}
        input   : ${this.input}
        output  : ${JSON.stringify(this.output)}`
    }
}

module.exports = Transaction;