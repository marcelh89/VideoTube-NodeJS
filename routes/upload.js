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
};

