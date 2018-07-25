const express = require('express');
const bodyParser = require('body-parser');
const P2PServer = require('./P2pServer/P2pServer');
const Wallet = require('./wallet/wallet');
const TransactionPool = require('./transactionPool/transactionPool');

const Block = require('./blockchain/block');

const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();
app.use(bodyParser.json());

const p2pServer = new P2PServer();
let transactionPool = new TransactionPool();
let wallet = new Wallet();

app.use(express.static(__dirname + '/'));

app.listen(HTTP_PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Connected to HTTP_PORT: ${HTTP_PORT}`)
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
     res.sendFile(__dirname + '/index.html');
});

// app.post('/msg', (req, res) => {
//     let msg = req.body;
//     res.json({"test" : "some Responce"});
// });

app.get('/connected_peers', (req, res) => {
   res.json(JSON.stringify(p2pServer.getConnectedPeers()));
});

app.get('/blockchain', (req, res) => {
    res.json(p2pServer.blockchain.chain);
});

app.get('/transactions', (req, res) => {
   res.json(p2pServer.getTransactions());
});

app.post('/transaction', (req, res) => {
    const data = req.body.tData;
    const transaction = wallet.createTransaction(data.recipient, data.amount, transactionPool);
    p2pServer.tPool.updateAddTransaction(transaction);
    p2pServer.syncTransactionPool(transaction);
    res.json(transaction);
});

app.post('/mine', (req, res) => {
    const data = req.body.data;
    const block = p2pServer.addBlock(data);
    p2pServer.syncBlockchain();

    res.redirect('/blockchain');
});

app.get('/wallet', (req, res) => {
    res.json(JSON.stringify(wallet));
});

app.get('/wallet/transactions', (req, res) => {
    // let senderAddress = req.params['senderAddress'];
    //use senderAddress instead of wallet.publicKey
    res.json(p2pServer.getTransactionsByAddress(wallet.publicKey));
});

p2pServer.listen();