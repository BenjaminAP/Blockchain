const Wallet = require('../wallet/wallet');
const Transaction = require('../wallet/transaction/transaction');
const ChainUtil = require('./chain_util');

describe('Transaction', () => {

    let wallet1,
        recipient,
        amount,
        transaction;

    beforeEach(() => {
        wallet1 = new Wallet();
        recipient = 'fsdag334g';
        amount = 30;
        transaction = new Transaction(wallet1, recipient, amount);
        Transaction.signTransaction(transaction, wallet1);
    });

    it('Invalidates unmatched hash', () => {
        const originalTransaction = JSON.stringify(transaction.output);
        transaction.output.recipient.amountReceived = 5000;
        expect(ChainUtil.hash(transaction.getOutputRecipient())).not.toEqual(ChainUtil.hash(originalTransaction));

    });
});