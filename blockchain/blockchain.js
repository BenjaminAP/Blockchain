const Block = require('./block');

class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
    }
    
    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(data) {
        const newBlock = Block.mineBlock(this.getLastBlock(), data)
        this.chain.push(newBlock);
        return newBlock;
    }
}

module.exports = Blockchain;