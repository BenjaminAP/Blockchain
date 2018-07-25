const Transaction = require('./transaction/transaction');
const Wallet = require('./wallet/wallet');

let wallet_1 = new Wallet();

const transaction = new Transaction(wallet_1, 'jik34br3', 100);

console.log(transaction.toString());