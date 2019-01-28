const MAX_FILE_SIZE = 500000000;
const ALLOWED_MIME_TYPES = ["video/x-flv", "video/x-matroska"]; //flv, mkv

const isValidMimeType = (mimetype) => {
    return ALLOWED_MIME_TYPES.includes(mimetype);
};

const isValidFileSize= (fileSize) => {
    return fileSize <= MAX_FILE_SIZE;
};

module.exports = {

    getUploadPage: (req, res) => {

        let query = "SELECT * FROM `categories`";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }

            res.render('pages/upload', {
                categories:result
            });
        });
       
    },

    processUploadPage: (req, res) => {
        console.log('file input data', req.file);
        console.log('text field data', req.body);

        //1st check for correct file type
        if(!isValidMimeType(req.file.mimetype)){
            return res.status(500).send("mime type not supported");
        }   

        //2nd check for max file size
        if(!isValidFileSize(req.file.size)){
            return res.status(500).send("maximum filesize of" + fileSize + " exceeded");
        }
            
        res.sendStatus(200);
    },

    


};

