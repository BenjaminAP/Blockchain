const Block = require('./block');
const { DIFFICULTY } = require('../config');

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
       expect(block.hash.substr(0, DIFFICULTY)).toEqual('0'.repeat(DIFFICULTY));
    });
});