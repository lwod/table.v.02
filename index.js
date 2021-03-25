const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors());

const characters = [
	{
		name:'carter',
		coords : {lat: 0, lng : 0,},
		
	},
	{
		name:'gary',
		coords : {lat: 0, lng : 0,},
		
	},
]

app.use(express.json({extended:true}))

app.get("/", async (req,res)=>{
	res.json({
		key:'value - 2'
	})
})

app.get('/table', async (req,res)=>{
	res.sendFile(`${__dirname}/index.html`)
})

app.post("/table", async (req,res)=>{
	
	const {coords} = req.body;
	const {ind} = req.body;
	
	
	characters[ind].coords = coords;
	
	console.log(characters)
	
	console.log(coords)
	
})


app.listen(port);