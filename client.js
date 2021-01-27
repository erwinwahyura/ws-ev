const WebSocket = require('ws')
const url = 'ws://localhost:3003'  // || env
const ws = new WebSocket(url)

ws.onopen = () => {
  ws.send('client connecting...')
}

ws.onerror = error => {
  console.log('WebScoket error: ', error)
}

ws.onmessage = msg => {
  console.log('message: ', msg.data)
}