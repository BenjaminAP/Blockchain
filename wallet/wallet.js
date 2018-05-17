const ChainUtil = require('../utils/chain_util');

class Wallet {
    constructor() {
        this.balance = null;
        this.keyPare = ChainUtil.generateKeyPare();
        this.publicKey = this.keyPare.getPublic().encode('hex');
    }

    toString() {
        return `Wallet: 
            balance = ${this.balance}
            keyPare = ${JSON.stringify(this.keyPare).substr(25)}
            publicKey = ${JSON.stringify(this.publicKey)}`
    }
}

module.exports = Wallet;