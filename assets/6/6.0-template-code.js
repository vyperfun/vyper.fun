class Chat {
    constructor(libp2p, topic) {
        // TODO: declare this.libp2p
        // TODO: declare this.topic

        // Join if libp2p is already on
        // TODO: check if libp2p is already started if so, call onStart
    }
    
    onStart () {
        // TODO: call join
    }

    onStop () {
        // TODO: call leave
    }

    // TODO: add dummy function to join

    // TODO: add dummy function to leave

    // TODO: add dummy function to send message which accepts message as a parameter
}

module.exports = Chat
// TODO: declare the default pubsub topic as module.exports.TOPIC similar to chat protocol
