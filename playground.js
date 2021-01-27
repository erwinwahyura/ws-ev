const WebSocket = require('ws')
const http = require('http')
const wss = new WebSocket.Server({ port: 8080 })
// const wss = new WebSocket.Server({ noServer: true })

// const server = http.createServer();
wss.on('connection', function conn(ws) {
  // console.log(ws, ' :lib: ')
  ws.on('message', function incoming(msg) {
    console.log('received: %s', msg)
    ws.send('Hello From Server', msg)
  })

  ws.on('apaya', function test(msg) {
    console.log(msg, 'apaya')
  })
  wss.addListener('apaya', m => {
    console.log('apaya : ', m)
  })
})


// server.listen(8080, () => {
//   console.log('listening to port 8080')
// })