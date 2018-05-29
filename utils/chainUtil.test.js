const Wallet = require('../wallet/wallet');
const Transaction = require('../wallet/transaction/transaction');
const ChainUtil = require('./chain_util');

describe('Transaction', () => {

    let wallet1,
        recipient,
        amount,
        transaction,
        transaction2;

    beforeEach(() => {
        wallet1 = new Wallet();
        recipient = 'fsdag334g';
        amount = 30;
        transaction = Transaction.newTransaction(wallet1, recipient, amount);
        transaction2 = Transaction.newTransaction(wallet1, recipient, 10);
    });

    it('Invalidates unmatched hash', () => {
        expect(ChainUtil.hash(transaction2.getOutput())).not.toEqual(ChainUtil.hash(transaction.getOutput()));
    });
});