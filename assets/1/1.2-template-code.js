'use strict'

const Libp2p = require('libp2p')

const TCP = require('libp2p-tcp')
const Wrtc = require('wrtc')
const WStar = require('libp2p-webrtc-star')
// TODO: require `libp2p-websockets`

const transportKey = WStar.prototype[Symbol.toStringTag]

let options = {
    modules: {
        transport: [ TCP, WStar, /* TODO: add `libp2p-websockets`*/ ],
    },
    config: {
        transport: {
            [transportKey]: {
                Wrtc
            }
        }
    }
}

async function main() {
    // Create a libp2p instance
    let libp2p = await Libp2p.create(options)
}

main()