// server.js
// load the things we need
var express = require('express');
var app = express();

const mysql = require('mysql');



const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'videotube'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;




// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));     

let multer = require('multer');
let upload = multer({ dest: 'uploads/' });

var routes = require('./routes/routes.js');
routes.assignRoutes(app, upload);

app.listen(8080);
console.log('8080 is the magic port');
