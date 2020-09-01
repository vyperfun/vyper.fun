'use-strict'

const pipe = require('it-pipe')

const PROTOCOL = '/libp2p/chat/1.0.0'

function send(stream) {
  pipe(
    // Read from stdin (the source)
    process.stdin,
    // Write to the stream (the sink)
    stream.sink
  )
}

function receive(stream) {
  pipe(
    // Read from the stream (the source)
    stream.source,
    // Sink function
    async function (source) {
      // For each chunk of data
      for await (const msg of source) {
        // Output the data as a utf8 string
        console.log('> ' + msg.toString('utf8').replace('\n', ''))
      }
    }
  )
}

module.exports = {
  send,
  receive,
  PROTOCOL
}