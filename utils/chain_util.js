const elliptic = require('elliptic').ec;
const ec = new elliptic('secp256k1');

class ChainUtil {

    static generateKeyPare() {
        return ec.genKeyPair();
    }
}

module.exports = ChainUtil;