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


// Book data GET route
app.get('/api/books', (req,res) => {
  res.json(bookData);
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
