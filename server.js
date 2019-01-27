// server.js
// load the things we need
var express = require('express');
var app = express();
let multer = require('multer');
let upload = multer({ dest: 'uploads/' });

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// upload page 
app.get('/upload', function(req, res) {
    res.render('pages/upload');
});

app.post('/upload', upload.single('fileInput'), (req, res) => {
    console.log('file input data', req.file);
    console.log('text field data', req.body);
    res.sendStatus(200);
  });

app.listen(8080);
console.log('8080 is the magic port');
