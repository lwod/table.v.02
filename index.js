const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get("/", async (req,res)=>{
	res.json({
		key:'value'
	})
})

app.listen(port);