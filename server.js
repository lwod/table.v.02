const path = require('path')

const express = require('express')
const app = express();
const PORT = process.env.PORT || 5002;
app.use(express.static(path.join(__dirname, 'public')))

const http = require('http')
const server = http.createServer(app)

const socketio = require('socket.io')
const io = socketio(server)

io.on('connection', async (socket) =>{
	
	socket.emit('message', {
		coodr:{lat: 0.0, lnt: 0.0}
	})
	
})


server.listen(PORT, ()=>{
	console.log('server on port: ', PORT)
})
