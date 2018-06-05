class Sender {
    constructor(senderWallet, amount) {
        this.expectedBalance = senderWallet.balance - amount;
        this.address = senderWallet.publicKey;
    }

    getExpectedBalance() {
        return this.expectedBalance;
    }
}

module.exports = Sender;