const WebSocket = require('ws');
const Blockchain = require('./blockchain/blockchain');

const P2P_PORT = process.env.P2P_PORT || 5001;
const peers = process.env.PEERS ? process.env.PEERS.split(',') : [];

class P2pServer {
    constructor() {
        this.blockchain = new Blockchain();
        this.sockets = [];
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
        socket.send(this.sendBlockchain());
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
            const chain = JSON.parse(msg);
            this.blockchain.replaceChain(chain);
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

    sendBlockchain() {
        return JSON.stringify(this.blockchain.chain);
    }

    addBlock(data, responce) {
        return this.blockchain.addBlock(data);
    }

    syncBlockchain() {
        this.sockets.forEach(socket => {
           socket.send(this.sendBlockchain());
        });
    }
}


module.exports = P2pServer;