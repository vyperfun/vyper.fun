// TODO: declare const for clear line

class Chat {
    constructor(libp2p, topic) {
        this.libp2p = libp2p
        this.topic = topic
        this.libp2p.start = () => this.libp2p.start.apply(this, arguments).then(() => this.onStart())
        this.libp2p.stop = () => this.libp2p.stop.apply(this, arguments).then(() => this.onStop())

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
            // TODO: check if the message was sent by me
            // TODO: take the last 5 char of the id as the user name
            // TODO: modify the log appropriately
            console.log(String(message.data))
        })
    }

    leave () {
        this.libp2p.pubsub.unsubscribe(this.topic)
    }

    send (message) {
        // TODO: remove the new line char (last char) from the message
        this.libp2p.pubsub.publish(this.topic, message).catch((err) => {
            if (err) throw err
        })
    }
}

module.exports = Chat
module.exports.TOPIC = '/libp2p/example/chat/1.0.0'
