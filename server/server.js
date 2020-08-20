const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static('client/build'));

app.post('/api/recipes', (req, res) => {
  let ingredients = req.body.ingredients;
  let dish = req.body.dish;
  axios
    .get(`http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`)
    .then((response) => {
      return res.status(200).send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.get('/*', (req, res) => {
    res.sendfile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
