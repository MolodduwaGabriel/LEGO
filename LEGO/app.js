const express = require('express');
const lego = require('./castelli.json'); //Copia il file people.json dentro la variabile people
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'LEGO',
    lego: lego.costruzioni //Passa il vettore profiles alla pagina index.pug
  });
});
app.get('/castelli', (req, res) => {
  const cartella = lego.costruzioni.find(p => p.id === req.query.id);
  res.render('castelli', {
    title: `About ${cartella.name}`,
    cartella,
  });
});

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});