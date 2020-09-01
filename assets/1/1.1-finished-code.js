'use strict'

const Libp2p = require('libp2p')

let options = {}

async function main() {
    // Create a libp2p instance
    let libp2p = await Libp2p.create(options)
}

main()