const WebSocket = require('ws')
const { setupWSConnection } = require('y-websocket/bin/utils')

const port = process.env.PORT || 5555

const wss = new WebSocket.Server({ port })

console.log(`🚀 Y.js WebSocket Server iniciado en puerto ${port}`)
console.log(`🔗 Conectar con: ws://localhost:${port}/nombre-documento`)

wss.on('connection', (ws, req) => {
  const url = new URL(req.url, `http://localhost:${port}`)
  const docname = url.pathname.slice(1) || 'default-room'
  
  console.log(`📡 Nueva conexión al documento: ${docname}`)
  
  setupWSConnection(ws, req, { docName: docname })
  
  ws.on('close', () => {
    console.log(`🔌 Desconexión del documento: ${docname}`)
  })
})

process.on('SIGINT', () => {
  console.log('\n🛑 Cerrando servidor Y.js...')
  wss.close(() => {
    process.exit(0)
  })
})