console.log('hi from server on port 8080');
const WebSocket = require('ws')
const server = new WebSocket.Server({port: 8080})

// Everything in WebSockets is event-based

// first thing that is going to happen:
// connection from the client
server.on('connection', socket => {
    // this is where the handshake is done

    // listen to messages, and handle them accrodingly in the callback
    socket.on('message', message => {
        
        // send messages back to the client!
        socket.send(`server is sending you back: ${message}`)

    })

})