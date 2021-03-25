const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors());

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
	
	const {character} = req.body;
	
})


app.listen(port);