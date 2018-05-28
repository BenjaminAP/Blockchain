const express = require('express');
const bodyParser = require('body-parser');
const P2PServer = require('./P2pServer');

const Block = require('./blockchain/block');

const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();
app.use(bodyParser.json());

const p2pServer = new P2PServer();


app.use(express.static(__dirname + '/'));

app.listen(HTTP_PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Connected to HTTP_PORT: ${HTTP_PORT}`)
});

app.get('/', (req, res) => {
     res.sendFile(__dirname + '/index.html');
});

// app.post('/msg', (req, res) => {
//     let msg = req.body;
//     res.json({"test" : "some Responce"});
// });

app.get('/blockchain', (req, res) => {
    res.json(p2pServer.blockchain.chain);
});

app.post('/mine', (req, res) => {
    const data = req.body.data;
    const block = p2pServer.addBlock(data);
    p2pServer.syncBlockchain()

    res.redirect('/blockchain');
});



p2pServer.listen();