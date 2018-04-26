const Block = require('./block');

const block = new Block('ts', 'lh', 'h', 'd');
console.log(block.toString());
console.log(Block.genesis().toString());