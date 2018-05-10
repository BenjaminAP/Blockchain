const express = require('express');
const bodyParser = require('body-parser');
const P2PServer = require('./P2pServer');

const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();
app.use(bodyParser.json());

const p2pServer = new P2PServer();


app.use(express.static(__dirname + '/'));

app.listen(HTTP_PORT, () => {
    console.log(`Connected to HTTP_PORT: ${HTTP_PORT}`)
});

app.get('/', (req, res) => {
     res.sendFile(__dirname + '/index.html');
});

app.post('/msg', (req, res) => {
    let msg = req.body;
    p2pServer.sendMsg(msg);
    res.json({"test" : "some Responce"});
});

p2pServer.listen();