const express = require('express');
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const artefacts = require('../services/artefacts');

router.post('/base64', async function(req, res, next) {
    try {
        res.json(await artefacts.uploadUsingBase64(req.body));
    } catch (err) {
        console.error(`Error while creating artefacts UsingBase64`, err.message);
        next(err);
    }
});

router.post('/form', upload.single('uploaded_file'), async function (req, res, next) {
    try {
        res.json(await artefacts.uploadUsingForm(req.body, req.file));
    } catch (err) {
        console.error(`Error while creating artefacts UsingForm`, err.message);
        next(err);
    }    
});

module.exports = router;
