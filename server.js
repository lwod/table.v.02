const path = require('path')

const express = require('express')
const app = express();
const PORT = process.env.PORT || 5002;
const cors = require('cors')

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

const http = require('http')
const server = http.createServer(app)

const socketio = require('socket.io')
const io = socketio(server)

io.on('connection', async (socket) =>{
	
	socket.emit('message', {
		coodr:{lat: 0.0, lng: 0.0}
	})
	
})


server.listen(PORT, ()=>{
	console.log('server on port: ', PORT)
})
