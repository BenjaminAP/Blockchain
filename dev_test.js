const Transaction = require('./wallet/transaction/transaction');
const Wallet = require('./wallet/wallet');

let wallet_1 = new Wallet();

const transaction = Transaction.newTransaction(wallet_1, 'jik34br3', 100);

console.log(transaction.toString());