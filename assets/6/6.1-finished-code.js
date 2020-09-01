class Chat {
    constructor(libp2p, topic) {
        this.libp2p = libp2p
        this.topic = topic

        // Join if libp2p is already on
        if (this.libp2p.isStarted()) this.join()
    }
    
    async start () {
        await this.libp2p.start()
        this.join()
    }

    async stop () {
        await this.libp2p.stop()
        this.leave()
    }

    join () {
        this.libp2p.pubsub.subscribe(this.topic, (message) => {
            console.log(String(message.data))
        }, (err) => {
            console.log(`Subscribed to ${this.topic}`, err)
        })
    }

    leave () {
        this.libp2p.pubsub.unsubscribe(this.topic)
    }

    send (message) {
        this.libp2p.pubsub.publish(this.topic, message).catch((err) => {
            if (err) throw err
        })
    }
}

module.exports = Chat
module.exports.TOPIC = '/libp2p/example/chat/1.0.0'
