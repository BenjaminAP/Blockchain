const ChainUtil = require('../utils/chain_util');
const { INIT_BALANCE } =  require('../config');

class Wallet {
    constructor() {
        this.balance = INIT_BALANCE;
        this.keyPare = ChainUtil.generateKeyPare();
        this.publicKey = this.keyPare.getPublic().encode('hex');
    }

    sign(hashedData) {
        return this.keyPare.sign(hashedData);
    }

    toString() {
        return `Wallet: 
            balance     : ${this.balance}
            keyPare     : ${JSON.stringify(this.keyPare)}
            publicKey   : ${JSON.stringify(this.publicKey)}`
    }
}

module.exports = Wallet;