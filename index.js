const express = require('express');
const app = express();

app.set('port', (process.env.PORT) || 5000);
// app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/html'))
app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('mainmenu')
})
app.get('/game', (req, res) => {
  res.render('game')
})
app.get('/about', (req, res) => {
  res.render('about')
})

app.listen(app.get('port'), function () {
  console.log('running on port', app.get('port'))
})
