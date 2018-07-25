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

    it("Block hash is correct", () => {
       expect(block.hash === Block.blockHash(block)).toBe(true);
    });

    it("Validates proof of work with leading ZEROS = DIFFICULTY level", () => {
       expect(block.hash.substr(0, block.difficulty)).toEqual('0'.repeat(block.difficulty));
    });

    it("Decrease difficult when previous block is mined slow", () => {
        expect(Block.adjustDifficulty(block, block.timestamp + 40000)).toBe(block.difficulty - 1);
    });

    it("Increase difficulty when previous block is mined fast ", () => {
        expect(Block.adjustDifficulty(block, block.timestamp + 1)).toBe(block.difficulty + 1);
    });
});