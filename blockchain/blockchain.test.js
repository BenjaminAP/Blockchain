const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', () => {

    let blockchain;

    beforeEach(() => {
        blockchain = new Blockchain();
    });

    it('Verify that genesis block match the original', () => {
        expect(blockchain.chain[0]).toEqual(Block.genesis());
    });

    it('Mined block verified data', () => {
        const data = 'test';
        const newBlock = blockchain.addBlock(data);
        expect(newBlock.data).toEqual(data);
    });

    it('Blocks in chain must have/match prevBlock hash', () => {

        const data = 'test';
        blockchain.addBlock(data);
        blockchain.addBlock(data);
        blockchain.addBlock(data);

        for(index = 1; index <= blockchain.chain.length -1; index++) {
            let block = blockchain.chain[index];
            let prevBlock = blockchain.chain[index -1];
            expect(block.prevHash).toEqual(prevBlock.hash);
        }
    });
});