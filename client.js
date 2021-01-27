const WebSocket = require('ws')
const url = 'ws://localhost:3003'
// const url = 'ws://13.250.50.66:8080'
const ws = new WebSocket(url)

ws.addEventListener('open', () => {
  ws.send('client connecting...')
})

ws.addEventListener('error', error => {
  console.log('WebScoket error: ', error)
})

ws.addEventListener('message', msg => {
  console.log('message: ', msg.data)
  ws.addEventListener('apaya', m => {
    console.log(m, 'naon')
  })
})