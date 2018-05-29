const Sender = require('./sender');
const Recipient = require('./recipient');
//Details about transaction
//--senders
//--recipient
class OutDetails {
    constructor(senderWallet, recipient, amount) {
        this.sender = new Sender(senderWallet, amount);
        this.recipient = new Recipient(amount, recipient);
    }

    toString() {
        return `OutDetails :
                    sender : ${JSON.stringify(this.sender)}
                    recipient: ${JSON.stringify(this.recipient)}`;
    }
}

module.exports = OutDetails;