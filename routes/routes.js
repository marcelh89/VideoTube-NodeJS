const {getIndexPage} = require('./index');
const {getUploadPage, processUploadPage} = require('./upload');


exports.assignRoutes = function (app, upload) {


    // index page 
    app.get('/', getIndexPage );

    // about page 
    app.get('/about', function(req, res) {
        res.render('pages/about');
    });

    // upload page 
    app.get('/upload', getUploadPage );

    app.post('/upload', upload.single('fileInput'), processUploadPage);
}