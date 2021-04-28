const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/series', (req,res) => {
	res.send(JSON.stringify([
		{id: 1, title:'Game of Thrones'},
		{id: 2, title:'Dynasty'},
		{id: 3, title:'The Last Kingdom'},
	]));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});