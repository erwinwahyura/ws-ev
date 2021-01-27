const WebSocket = require('ws')
const http = require('http')
const server = http.createServer();
const wss = new WebSocket.Server({ server })

wss.on('connection', function conn(ws) {
  ws.on('message', function incoming(msg) {
    console.log('received: %s', msg)
    ws.send('Hello From Server', msg)
  })

  // ws.on('apaya', function test(msg) {
  //   console.log(msg, 'apaya')
  // })
  // wss.addListener('apaya', m => {
  //   console.log('apaya : ', m)
  // })
})


server.listen(3003, () => {
  console.log('listening to port 3003')
})