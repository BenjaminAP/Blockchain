const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(timestamp, prevHash, hash, data) {
        this.timestamp = timestamp;
        this.prevHash = prevHash;
        this.hash = hash;
        this.data = data;
    }

    static genesis() {
        return new Block(
                'Genesis Time', 
                '------------',
                'x00000000000',
                []);
    }

    static hash(timestamp, prevHash, data) {
        return SHA256(`${timestamp}${prevHash}${data}`).toString();
    }

    static mineBlock(prevBlock, data) {
        const timestamp = Date.now();
        const prevHash = prevBlock.hash;
        const hash = this.hash(timestamp, prevHash, data);

        return new Block(timestamp, prevHash, hash, data);
    }

    static proofOfWork() {
        return "";
    }

    toString() {
        return `Block --
            timestamp: ${this.timestamp}
            lastHash: ${this.lastHash}
            hash: ${this.hash}
            data: ${this.data}`;
    }
}

module.exports = Block;