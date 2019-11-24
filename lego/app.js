var express = require('express');
const lego = require('./lego.json');
var app = express();

app.set('view engine','pug');

app.use(express.static(__dirname + '/public')); 

app.get('/', function(req,res){
    res.render('index', {
    title: 'LEGO',
    content : 'Pagina Lego',
    lego: lego.profiles
    });
});

app.get('/profile',(req, res) => {
    const leg = lego.profiles.find((l) => l.id === req.query.id);
    res.render('profile',{
        title: `${leg.Nome}`,leg
    });
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});