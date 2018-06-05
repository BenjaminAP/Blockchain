const ChainUtil = require('../../utils/chain_util');


//Details about sender
class InputDetail {
    constructor(transaction, senderWallet) {
        this.timestamp = Date.now();
        this.currentAmount = senderWallet.balance;
        this.address = senderWallet.publicKey;
        this.signature = senderWallet.sign(ChainUtil.hash(transaction.getOutput()));
    }

    getAddress() {
        return this.address;
    }
}

module.exports = InputDetail;