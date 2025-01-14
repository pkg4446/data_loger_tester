const express       = require('express');
const file_system   = require('../api/fs_core');
const path_data     = require('../api/fs_path');
const router        = express.Router();

router.post('/list', async function(req, res) {    
    let response;
    if(req.body.dvc != undefined) response = await file_system.Dir(path_data.data(req.body.dvc));
    else response = await file_system.Dir(path_data.root());
    res.status(201).send(response);
});

router.post('/log', async function(req, res) {    
    let response = "";
    if(req.body.dvc != undefined && req.body.file){
        response = await file_system.fileRead(path_data.data(req.body.dvc),req.body.file);
        response += ']';
    }
    res.status(201).send(response);
});

module.exports = router;