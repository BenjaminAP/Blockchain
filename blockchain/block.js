const SHA256 = require('crypto-js/sha256');
const { DIFFICULTY, MINE_RATE } = require('../config');

class Block {
    constructor(timestamp, prevHash, hash, nonce, difficulty, data) {
        this.timestamp = timestamp;
        this.prevHash = prevHash;
        this.hash = hash;
        this.nonce = nonce;
        this.difficulty = difficulty || DIFFICULTY;
        this.data = data;
    }

    static genesis() {
        return new Block(
                'Genesis Time', 
                '------------',
                'x00000000000',
                0,
                DIFFICULTY,
                [],
                0);
    }

    static generateHash(timestamp, prevHash, nonce, difficulty, data) {
        return SHA256(`${timestamp}${prevHash}${nonce}${difficulty}${data}`).toString();
    }

    static mineBlock(prevBlock, data) {
        let hash, timestamp, difficulty;
        let nonce = 0;
        const prevHash = prevBlock.hash;

        //proof of work.
        do {
            nonce++;
            timestamp = Date.now();

            difficulty = this.adjustDifficulty(prevBlock, timestamp);
            hash = this.generateHash(timestamp, prevHash, nonce, difficulty, data);

        } while (hash.substr(0, difficulty) !== '0'.repeat(difficulty));

        return new Block(timestamp, prevHash, hash, nonce, difficulty, data);
    }

    static adjustDifficulty(prevBlock, currentTime) {
        let difficulty = prevBlock.difficulty;

        if (prevBlock.timestamp + MINE_RATE > currentTime){
            return  difficulty + 1;
        } else {
            if (difficulty == 1)
                return difficulty;

            return difficulty - 1;
        }
    }

    static blockHash(block) {
        return this.generateHash(
                        block.timestamp,
                        block.prevHash,
                        block.nonce,
                        block.difficulty,
                        block.data);
    }


    toString() {
        return `Block --
            timestamp   : ${this.timestamp}
            prevHash    : ${this.prevHash}
            hash        : ${this.hash}
            nonce       : ${this.nonce}
            difficulty  : ${this.difficulty}
            data        : ${this.data}`;
    }
}

module.exports = Block;