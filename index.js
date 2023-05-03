const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefDetails = require('./data/chefData.json');

app.use(cors());
app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/chefDetails', (req, res) => {
  res.send(chefDetails);
});

app.get('/chef/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const selectedChef = chefDetails.find((chef) => chef.id === id);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`Italiano secret running on: ${port}`);
});
