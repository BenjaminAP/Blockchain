const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', () => {

    let blockchain;

    beforeEach(() => {
        blockchain = new Blockchain();
    });

    it('clockchain genesis block = genesis block', () => {
        expect(blockchain.chain[0]).toEqual(Block.genesis());
    });
});