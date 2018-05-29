class Sender {
    constructor(senderWallet, amount) {
        this.expectedBalance =  senderWallet.balance - amount;
        this.address = senderWallet.publicKey;
    }
}

module.exports = Sender;