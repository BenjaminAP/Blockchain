const elliptic = require('elliptic').ec;
const ec = new elliptic('secp256k1');
const SHA256 = require('crypto-js/sha256');

const uuidv1 = require('uuid/v1');

class ChainUtil {

    static generateKeyPare() {
        return ec.genKeyPair();
    }

    static generateUID() {
        return uuidv1();
    }

    static hash(dataToHash) {
        return SHA256(JSON.stringify(dataToHash)).toString();
    }

    static verifySignature(publicKey, signature, hashData){
        const key = ec.keyFromPublic(publicKey, 'hex');
        return key.verify(hashData, signature);
    }
}

module.exports = ChainUtil;