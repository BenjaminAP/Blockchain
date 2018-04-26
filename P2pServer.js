const WebSocket = require('ws');

const P2P_PORT = process.env.P2P_PORT || 5001;
const peers = process.env.PEERS ? process.env.PEERS.split(',') : [];

class P2pServer {
    constructor() {
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
        this.sockets.push(socket);
        this.msgHandler(socket);
    }

    connectToPeers() {
        peers.forEach(peer => {
            const ws = new WebSocket(peer);

            ws.on('open', () => {
                this.connectSocket(ws);
                console.log(`Connected to peer: ${peer}`);

                ws.send(JSON.stringify(`Connection established: ${peer} --> ${P2P_PORT}`));
            });
        });
    }

    msgHandler(socket) {
        socket.on('message', (msg) => {
           let data = msg;
           console.log(`MSG: ${data}`); 
        });
    }

    sendMsg(msg) {
        this.sockets.forEach(peer => {
            if ((peer.readyState === WebSocket.OPEN) && (peer !== peers[0])) {
                peer.send(JSON.stringify(msg));
            }
        });
    }
}

module.exports = P2pServer;