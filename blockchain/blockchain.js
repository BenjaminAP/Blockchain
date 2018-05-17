const Block = require('./block');

class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
    }
    
    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(data) {
        const newBlock = Block.mineBlock(this.getLastBlock(), data);
        this.chain.push(newBlock);
        return newBlock;
    }

    isValidChain(chain) {
        if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis()))
            return false;

        for (let i = 1; i < chain.length; i++) {
            const prevBlock = chain[i - 1];
            const block = chain[i];

            if (block.prevHash !== prevBlock.hash ||
                block.hash !== Block.blockHash(block)) {
                return false;
            }
        }

        return true;
    }

    replaceChain(chain) {
        if (chain.length <= this.chain.length) {
            console.log("Chain not longer than current chain");
            return;
        }else if (!this.isValidChain(chain)) {
            console.log("Invalid Chain");
            return;
        }

        console.log("replacing chain with new one");
        this.chain = chain;
    }

    toString() {
        this.chain.forEach(block => {
           console.log(block.toString());
        });
    }

}

module.exports = Blockchain;