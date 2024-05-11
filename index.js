const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
  const data = req.body;
  console.log('Data received:', data);
})

app.get('/', (req, res) => {
  const data = req.body;
  res.send(data);
})

const PORT = 3000;
app.listen(PORT, () => console.log('Sever is listening on PORT:', PORT));


