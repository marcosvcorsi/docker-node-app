const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  return response.send('Eu sou Full Cycle');
});

app.listen(8080, () => console.log('Server is running'));
