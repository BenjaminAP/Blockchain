const WebSocket = require('ws');

const P2P_PORT = process.env.P2P_PORT || 5001;
const peers = process.env.PEERS ? process.env.PEERS.split(',') : [];

class P2pServer {
    constructor() {
        this.sockets = [];
    }
    
    listen() {
        const wss = new WebSocket.Server({port: P2P_PORT});

        wss.on('connection', ws => {
            this.connectToSocket(ws);
        });

        this.connectToPeers();
    }

    connectToSocket(ws) {
        this.sockets.push(ws);
        console.log(`Connected to WScoket: ${ws}`);
    }

    connectToPeers() {
        peers.forEach(peer => {
            //ws://localhost:5001
            this.sockets.push(peer);
            console.log(`Connected to peer in PORT: ${peer}`);
        });
    }
}

module.exports = P2pServer;