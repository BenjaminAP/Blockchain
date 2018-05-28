const ChainUtil = require('../../utils/chain_util');

class InputDetail {
    constructor(transaction, senderWallet) {
        this.timestamp = Date.now();
        this.currentAmount = senderWallet.balance;
        this.address = senderWallet.publicKey;
        this.signature = senderWallet.sign(ChainUtil.hash(transaction.output));
    }
}

module.exports = InputDetail;