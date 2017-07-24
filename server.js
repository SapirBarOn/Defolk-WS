const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      port = process.env.PORT || 3000 ,
      playlistController = require('./controllers/playlistController'),
      app = express();


//app.use('/',express.static(`${__dirname}/html`)); //for API
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use( (req,res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept");
    res.set("Content-Type", "application/json");
    next();
});


app.get('/', (req,res,next) => {
  res.send(`${__dirname}/index.html`);
});

app.get('/includes/style.css', (req, res) => {
   res.sendFile(`${__dirname}/includes/style.css`);
});

app.get('/getAllSongs', playlistController.getAllSongs);
app.get('/getAllAlbums', playlistController.getAllAlbums);

app.all('*', (req, res) => {
    res.status(404).send(`Got Lost? This is a friendly 404 Page`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});