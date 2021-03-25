const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get("/", async (req,res)=>{
	res.json({
		key:'value - 2'
	})
})

app.get('/table', async (req,res)=>{
	res.sendFile(`${__dirname}/index.html`)
})

app.listen(port);