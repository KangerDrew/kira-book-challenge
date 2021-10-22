const express = require('express');
const bookData = require('./bookData.json');
const app = express();
const PORT = 8080;

// Express Configuration
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static('public'));

// Sample GET route
app.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

// Another GET route
app.get('/api/morestuff', (req, res) => res.json({
  message: "Also works!",
  moremsg: "stop panicking it works bro"
}));

// Book data GET route
app.get('/api/books', (req,res) => {
  res.json(bookData);
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
