const Block = require('./block');

describe('Block', () =>{

    let data,
        prevHash,
        block;

    beforeEach(() => {
        data = 'some data',
        prevBlock = Block.genesis();
        block = Block.mineBlock(prevBlock, data);
    });

    it('blockData = inputData', () => {
        expect(block.data).toEqual(data);
    });
});