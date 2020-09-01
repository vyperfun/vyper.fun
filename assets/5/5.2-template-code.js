'use strict'
const PeerInfo = require('peer-info')

const Libp2p = require('libp2p')

const TCP = require('libp2p-tcp')
const WS = require('libp2p-websockets')
const WStar = require('libp2p-webrtc-star')
const Wrtc = require('wrtc')

const multiaddr = require('multiaddr')

const Mplex = require('libp2p-mplex')
const Secio = require('libp2p-secio')

const Bootstrap = require('libp2p-bootstrap')
const MDNS = require('libp2p-mdns')
const KadDHT = require('libp2p-kad-dht')

const Chat = require('./5.0-finished-code.js')

const transportKey = WStar.prototype[Symbol.toStringTag]

const isBootstrap = process.argv[2] == '--bootstrap' 

const info = {
    "id": "QmWjz6xb8v9K4KnYEwP5Yk75k5mMBCehzWFLCvvQpYxF3d",
    "privKey": "CAASpwkwggSjAgEAAoIBAQDKNKwPX4DJhYdGreAVaJy+efhIfbyczR0Mfyi/JfzszY9INH83Veo2s/yOKv+YOP4y7OWpkXL5G6K8fLgxwq5gtTc78W07uz5ZUrxfOT0R4QJuiiQHjQSxYKw08yLIP9JaR2ztL46DOO/Nvzl9gCWHGsAb+w+RLWa0R0SRyvaDiw8aZW9G70yYTGF/SPkEoYN26sioVDwppmKxZ9mTuKsujG0AGAMVPnmjhDI5WmBD3gnOiqCECqlgxl29Qlc1fCIbojcUVE9eWFWassFLicGdo/iMacsVvoTav9JvHZsMvg1HXeK0khQWluCUfdcR6coijDMDWBa77dTI6+b2ybZXAgMBAAECggEALk4hmOOl+oA5mlX3Gu/59SS5VuB0cPQH0vTLv/pTEWeBiGd9Oo7SM/TDwUrXfWSP0dmuPkawrZtGiSOGit6qUDsviuqeuS8H+CyaNrRE5/M/O1EnLxN8H6KjzPxg2rrC0SnKKAbb+/Dt+Y/w+mx+K5JUrBOyXOyouGAZs8lm6nhlL4nelNh2hez0Rp9RFlCokk8aldHCJVUbUP3AwOtVqYJNttSofq4jvnXvUX8Kgb9WjGaZANoQNH+zn6rM2OvmDcxQvnxbKtAgBEu7O60kAdGtpw+JGvj1E5f+iuNlK+GYvYbpDhSt1bRfTMsHxRFxJ2V7vDSDqTLdxUfahI+WAQKBgQD6PUBSYOY151h3iBHqqJJ4sYQ/rUbs3/9QDZRKsxj/gC0vZFQHTVfLHiY2qUikjoMnTy+t1L/ot919ZM5XqOwjZ3oodtjRa3orWKUwGQElORxZQPCPz268GIU+DKSyE5ieBqGMdB3uOZ7oHKODc1a9HiDApux8C3Vwde0oMZcp3wKBgQDO3Feipt7dZ8AoZ1MJE/pRrhJBZDBhc9TpmQccRfG1JpgocA7GgRnzFQgM5yi6DrSIx3SCqPZm5K5VKqEW9PEsHbyNEPo8U0oOnhmVcBIrJe8Rf+wg5R3WvIwlh454ROchNl7iuJPgXTQzZjWtaKbeMm4fXTweRr0Mk9q5GaFyiQKBgC6tuE7llmvdsMnzTuxH77Kl4naCWyWajySes9fPWs1mWodpnqcSDVttT1GI+G0BzINLqSgy9G1zxtQ6NqdxckMUbVwY907xToPBcGbtcyI/agNYMseQuSZLKKevchVpxGFN+Vqa2m5yvyqrFPFTVY3HjfKB8MEe3hRRWyDRR1JfAoGAJV/4UYH26GfzdxlcDlrWsmVSFRCGEUV9ZYtplnkot8M2YLAGa2UuDBZzsukdGajIg6IN8gGXK3YL7YVbP6uX25Gv3IkBvV6LFeMI2lA6aCNdc3r6beMXphHA/JLmceJ5JC4PrMUOqs4MPXEtJ5yt8Z2I+g+9afb790bLkQAJhIkCgYEAzyYCF47U+csbRzGb/lszRwg1QvGtTvzQWuNAcAKclCuN7xplJJ+DUyvVA00WCz/z8MMa/PK8nB0KoUDfuFvo8bbNEAPcGK0l/He7+hF4wdm4S8fX22up5GgJUdV/dv8KZdE2U7yIU/i8BKw6Z3vJB7RB900yfjt56VlgsKspAB0=",
    "pubKey": "CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDKNKwPX4DJhYdGreAVaJy+efhIfbyczR0Mfyi/JfzszY9INH83Veo2s/yOKv+YOP4y7OWpkXL5G6K8fLgxwq5gtTc78W07uz5ZUrxfOT0R4QJuiiQHjQSxYKw08yLIP9JaR2ztL46DOO/Nvzl9gCWHGsAb+w+RLWa0R0SRyvaDiw8aZW9G70yYTGF/SPkEoYN26sioVDwppmKxZ9mTuKsujG0AGAMVPnmjhDI5WmBD3gnOiqCECqlgxl29Qlc1fCIbojcUVE9eWFWassFLicGdo/iMacsVvoTav9JvHZsMvg1HXeK0khQWluCUfdcR6coijDMDWBa77dTI6+b2ybZXAgMBAAE="
}

let options = {
    modules: {
        transport: [ TCP, WS, WStar ],
        connEncryption: [ Secio ],
        streamMuxer: [ Mplex ],
        peerDiscovery: [ Bootstrap, MDNS ],
        dht: KadDHT
    },
    config: {
        transport: {
            [transportKey]: {
                Wrtc
            }
        },
        peerDiscovery: {
            bootstrap: {
                list: [
                    '/ip4/127.0.0.1/tcp/63785/ipfs/QmWjz6xb8v9K4KnYEwP5Yk75k5mMBCehzWFLCvvQpYxF3d'
                 ]
            },
            dht: {
                enabled: true,
                randomwalk: {
                    enabled: true
                }
            }
        }
    }
}

async function dialPeers(libp2p) {
    // TODO: Identify a new peer added event by using libp2p.peerStore.on('peer')
    // TODO: dial connection to the newly added peer
    // TODO: use the send function  of chat module to send message written to console on the stream
}


async function main() {
    let peerInfo = await PeerInfo.create(info);
    if(isBootstrap) options.peerInfo = peerInfo;
    // Create a libp2p instance
    let libp2p = await Libp2p.create(options)

    libp2p.on('peer:connect', (peerInfo) => {
        console.info(`Connected to ${peerInfo.id.toB58String()}!`)
    })

    if(isBootstrap) {
        libp2p.peerInfo.multiaddrs.add('/ip4/0.0.0.0/tcp/63785')
        libp2p.peerInfo.multiaddrs.add('/ip4/0.0.0.0/tcp/63786/ws')
    } else {
        libp2p.peerInfo.multiaddrs.add('/ip4/0.0.0.0/tcp/0')
        libp2p.peerInfo.multiaddrs.add('/ip4/0.0.0.0/tcp/0/ws')
    }

    dialPeers(libp2p)

    // Handle Message Recieved
    await libp2p.handle(Chat.PROTOCOL, async ({ stream }) => {
        Chat.receive(stream)
    })

    await libp2p.start()
    console.info(`Libp2p Started`)
    libp2p.peerInfo.multiaddrs.forEach(ma => console.log(ma.toString()))
}

main()