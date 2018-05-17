const ChainUtil = require('../utils/chain_util');

class Transaction {
    constructor() {
        this.id = ChainUtil.generateUID();
        this.input = null;
        this.output = [];
    }

    toString() {
        return `Transaction:
            id      : ${this.id}
            input   : ${this.input}
            output  : ${this.output}`
    }
}