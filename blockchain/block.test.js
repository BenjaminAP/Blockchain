const Block = require('./block');

describe('Block', () =>{

    let data,
        prevBlock,
        block;

    beforeEach(() => {
        data = 'some data',
        prevBlock = Block.genesis();
        block = Block.mineBlock(prevBlock, data);
    });

    it('blockData = inputData', () => {
        expect(block.data).toEqual(data);
    });

    it("Mined block.prevHash = prevBlock.hash", () => {
        expect(block.prevHash).toEqual(prevBlock.hash);
    });
});