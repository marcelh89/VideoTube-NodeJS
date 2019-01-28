const {getIndexPage} = require('./index');
const {getUploadPage} = require('./upload');


exports.assignRoutes = function (app, upload) {


    // index page 
    app.get('/', getIndexPage );

    // about page 
    app.get('/about', function(req, res) {
        res.render('pages/about');
    });

    // upload page 
    app.get('/upload', getUploadPage );

    app.post('/upload', upload.single('fileInput'), (req, res) => {
        console.log('file input data', req.file);
        console.log('text field data', req.body);
        res.sendStatus(200);
    });
}