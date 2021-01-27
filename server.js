const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', function conn(ws) {
  ws.on('message', function incoming(msg) {
    console.log('received: %s', msg)
    ws.send('Hello From Server', msg)
  })
})
