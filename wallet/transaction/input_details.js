
class InputDetail {
    constructor(senderWallet, transaction) {
        this.timestamp = Date.now();
        this.currentAmount = senderWallet.balance;
        this.address = senderWallet.publicKey;
        // this.signature = senderWallet.sign(transaction.output);
    }
}

module.exports = InputDetail;