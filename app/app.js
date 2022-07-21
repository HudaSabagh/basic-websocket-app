console.log('app started!')

const socket = new WebSocket('ws://localhost:8080')
// that protocol will automatically trigger the handshake

// we can listen to socket events:
socket.onmessage = ({ data }) => {
    console.log('message received from server: ', data)
}

// send on click
document.querySelector('button').onclick = () => {
    socket.send('hello')
}

