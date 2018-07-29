const OutDetails = require(`./output/output_details`);
const InDetails = require(`./input_details`);
const ChainUtil = require('../utils/chain_util');

class Transaction {
    constructor() {

        this.id = ChainUtil.generateUID();
        this.input = null;
        this.output = null;
    }

    getOutputSender() {
        return this.output.sender;
    }

    getSenderExpectedBalance() {
        return this.output.sender.getExpectedBalance();
    }

    getInputAddress() {
        return this.input.getAddress();
    }

    getInputCurrentAmount() {
        return this.input.currentAmount;
    }

    getOutputRecipient(recipientAddress) {

        for (let i = 0; i < this.output.recipients.length; i++) {
            if (this.output.recipients[i].address === recipientAddress) {
                return this.output.recipients[i];
            }
        }
    }

    getOutput() {
        return this.output;
    }

    static newTransaction(senderWallet, recipient, amount) {

        if (senderWallet.balance  < amount) {
            console.log('Senders balance lower than amount send');
            return;
        }

        const transaction = new this();

        transaction.output = new OutDetails(senderWallet, recipient, amount);
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

    updateTransaction(senderWallet, recipient, amount) {

        if (this.output.sender.address !== senderWallet.publicKey) {
            console.log(`Incorrect transaction being updated`);
            return;
        }

        if (this.output.sender.expectedBalance < amount) {
            console.log(`Amount larger than balance`);
            return;
        }

        this.output.sender.expectedBalance = this.output.sender.expectedBalance - amount;

        this.output.addRecipient(amount, recipient);
        Transaction.signTransaction(this, senderWallet);

        return this;
    }

    toString() {
        return `Transaction :
        id      : ${this.id}
        input   : ${this.input}
        output  : ${JSON.stringify(this.output)}`
    }
}

module.exports = Transaction;