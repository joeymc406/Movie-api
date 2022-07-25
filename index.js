const { application } = require('express');
const express =  require('express');
morgan = require('morgan');

const app = express();

let topMovies = [
      {
            title:''
      },
      {
            title:''
      },
      {
            title:''
      },
      {
            title:''
      },
      {
            title:''
      },
      {
            title:''
      },
      {
            title:''
      },
      {
            title:''
      },
      {
            title:''
      },
      {
            title:''
      }
];

app.use(morgan('common'));
//text file for top 10 movies.
app.get ('/', (req, res) => {
      res.send('This is my list of top 10 Movies');
});
//json file for top 10 movies
app.get('/movies', (req, res) => {
      res.json(topMovies);
});
// get the documentation.html
app.use(express.static('public'));

app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('something went wrong!')
});

app.listen(8080, () => {
      console.log('Your app is listening on port 8080.');
});
//07-24-22 issue pushing to repo