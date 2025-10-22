# Y.js WebSocket Server

Servidor WebSocket oficial para sincronización en tiempo real usando Y.js.

## Características

- ✅ Servidor Y.js oficial usando `y-websocket/bin/utils`
- ✅ Soporte para múltiples documentos/rooms
- ✅ Configuración de puerto via variable de entorno
- ✅ Logs detallados de conexiones
- ✅ Compatible con Render, Railway, Fly.io

## Instalación

```bash
npm install
```

## Uso Local

```bash
# Puerto por defecto (5555)
npm start

# Puerto personalizado
PORT=4444 npm start
```

## Deploy en Render

1. Conectar repositorio en Render
2. Configurar como "Web Service"
3. Runtime: Node
4. Build Command: `npm install`
5. Start Command: `npm start`
6. Variables de entorno (opcional):
   - `PORT`: Puerto del servidor (Render lo asigna automáticamente)

## Conexión desde Frontend

```javascript
// Desarrollo
const wsUrl = 'ws://localhost:5555'

// Producción (Render)
const wsUrl = 'wss://tu-servidor.onrender.com'

// Conectar a un documento específico
const provider = new WebsocketProvider(wsUrl, 'nombre-documento', ydoc)
```

## Estructura de URLs

- `ws://localhost:5555/mi-documento` → Documento "mi-documento"
- `ws://localhost:5555/` → Documento "default-room"
- `wss://servidor.onrender.com/checklist-test` → Documento "checklist-test"

## Logs

El servidor muestra logs detallados:
- 🚀 Inicio del servidor
- 📡 Nuevas conexiones
- 🔌 Desconexiones
- ❌ Errores (si los hay)