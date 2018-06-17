


class Message {
    constructor(msgType, data) {
        this.type = MSG_TYPE[msgType];
        this.data = data;
    }
}

module.exports = Message;