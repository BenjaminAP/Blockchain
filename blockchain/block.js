const SHA256 = require('crypto-js/sha256');
const { DIFFICULTY } = require('../config');

class Block {
    constructor(timestamp, prevHash, hash, data, nonce) {
        this.timestamp = timestamp;
        this.prevHash = prevHash;
        this.hash = hash;
        this.nonce = nonce;
        this.data = data;
    }

    static genesis() {
        return new Block(
                'Genesis Time', 
                '------------',
                'x00000000000',
                [],
                0);
    }


    ///TODO: proof of work
    static generateHash(timestamp, prevHash, data, nonce) {
        return SHA256(`${timestamp}${prevHash}${data}${nonce}`).toString();
    }

    static mineBlock(prevBlock, data) {
        let hash, timestamp;
        let nonce = 0;

        const prevHash = prevBlock.hash;

        //proof of work.
        do {
            nonce++;
            timestamp = Date.now();
            hash = this.generateHash(timestamp, prevHash, data, nonce);
        } while (hash.substr(0, DIFFICULTY) !== '0'.repeat(DIFFICULTY));

        return new Block(timestamp, prevHash, hash, data, nonce);
    }

    static blockHash(block) {
        return this.generateHash(block.timestamp, block.prevHash, block.data, block.nonce);
    }


    toString() {
        return `Block --
            timestamp: ${this.timestamp}
            prevHash: ${this.prevHash}
            hash: ${this.hash}
            nonce: ${this.nonce}
            data: ${this.data}`;
    }
}

module.exports = Block;