class Chat {
    constructor(libp2p, topic) {
        this.libp2p = libp2p
        this.topic = topic

        // Join if libp2p is already on
        if (this.libp2p.isStarted()) this.join()
    }
    
    start () {
        this.join()
    }

    stop () {
        this.leave()
    }

    join () {

    }

    leave () {

    }

    send (message) {
        
    }
}

module.exports = Chat
module.exports.TOPIC = '/libp2p/example/chat/1.0.0'
