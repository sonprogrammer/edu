const express = require('express')
require('dotenv').config();
const app = express()

app.get('', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT, () => {
	console.log(`Server is running in ${process.env.PORT}`)
})