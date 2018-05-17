
class OutDetails {
    constructor(senderWallet, recipient, amount) {
        this.sender = {
            expectedBalance :  senderWallet.balance - amount,
            address       : senderWallet.publicKey
        };

        this.recipient = {
            amountReceived: amount,
            address: recipient
        };
    }

    toString() {
        return `OutDetails :
                    sender : ${JSON.stringify(this.sender)}
                    recipient: ${JSON.stringify(this.recipient)}`;
    }
}

module.exports = OutDetails;