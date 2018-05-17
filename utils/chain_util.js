const elliptic = require('elliptic').ec;
const ec = new elliptic('secp256k1');

const uuidv1 = require('uuid/v1');

class ChainUtil {

    static generateKeyPare() {
        return ec.genKeyPair();
    }

    static generateUID() {
        return uuidv1();
    }
}

module.exports = ChainUtil;