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

const coords = {
	lat:41.60066294542978,
	lng:-87.33857699777955
}

io.on('connection', async (socket) =>{
	
	socket.emit('message', coords)
	socket.on('mapClick', ({lat,lng}) => {
		coords.lat = lat
		coords.lng = lng
		
		// console.log(coords)
		io.emit('coords', coords)
	})
	
})


server.listen(PORT, ()=>{
	console.log('server on port: ', PORT)
})
