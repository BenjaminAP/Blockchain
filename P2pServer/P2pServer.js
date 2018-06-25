const WebSocket = require('ws');
const Blockchain = require('../blockchain/blockchain');
const TransactionPool = require('../wallet/transactionPool/transactionPool');
const Message = require('./Message');
const { MSG_TYPE } = require('../config');

const P2P_PORT = process.env.P2P_PORT || 5001;
const peers = process.env.PEERS ? process.env.PEERS.split(',') : [];

class P2pServer {
    constructor() {
        this.blockchain = new Blockchain();
        this.tPool = new TransactionPool();
        this.sockets = [];
        this.msg;
    }

    listen() {
        const wss = new WebSocket.Server({port : P2P_PORT});

        wss.on('connection', ws => {
            this.connectSocket(ws);
        });

        this.connectToPeers();
    }

    connectSocket(socket) {
        this.msgHandler(socket);
        this.sockets.push(socket);
        socket.send(this.sendChain());
    }

    connectToPeers() {
        peers.forEach(peer => {
            const ws = new WebSocket(peer);

            ws.on('open', () => {
                this.connectSocket(ws);
            });
        });
    }


    msgHandler(socket) {
        socket.on('message', (msg) => {

            const parseMsg = JSON.parse(msg);

            switch (parseMsg.type) {
                case MSG_TYPE.chain:
                    this.blockchain.replaceChain(parseMsg.data);
                    break;
                case MSG_TYPE.transaction:
                    this.tPool.updateAddTransaction(parseMsg.data);
                    break;
                default:
                    break;
            }


        });
    }

    sendMsg(msg) {
        this.sockets.forEach(peer => {
             // if ((peer.readyState === WebSocket.OPEN) && (peer !== peers[0])) {
            if (peer.readyState === WebSocket.OPEN) {
                peer.send(JSON.stringify(msg));
            }
        });
    }

    sendChain() {
        this.msg = new Message(MSG_TYPE.chain, this.blockchain.chain);
        return JSON.stringify(this.msg);
    }

    addBlock(data, responce) {
        return this.blockchain.addBlock(data);
    }

    syncBlockchain() {
        this.sockets.forEach(socket => {
           socket.send(this.sendChain());
        });
    }

    sendTransaction(socket, transaction) {
        this.msg = new Message(MSG_TYPE.transaction, transaction);
        socket.send(JSON.stringify(this.msg));
    }

    getTransactions() {
        return this.tPool;
    }

    syncTransactionPool(transaction) {
        this.sockets.forEach(socket => {
           this.sendTransaction(socket, transaction);
        });
    }
}


module.exports = P2pServer;