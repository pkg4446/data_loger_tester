const express       = require('express');
const file_system   = require('../api/fs_core');
const path_data     = require('../api/fs_path');
const router        = express.Router();

router.post('/log', async function(req, res) {    
    const log = req.body;
    if(log.DVC != undefined && log.data != undefined ){
        const date = new Date();
        let file_name = date.getFullYear()+"_";
        if((date.getMonth()+1)<10) file_name += "0";
        file_name += (date.getMonth()+1)+"_";
        if(date.getDate() < 10) file_name += "0";
        file_name += date.getDate()+".json";
        log.data.time = date;
    
        const deive_path = path_data.data(log.DVC);
        if(!await file_system.check(deive_path)) await file_system.folderMK(deive_path);
        if(!await file_system.check(deive_path+"/"+file_name)){
            await file_system.fileMK(deive_path,"[\r\n"+JSON.stringify(log.data),file_name);
        }else{
            await file_system.fileADD(deive_path,"\r\n,"+JSON.stringify(log.data),file_name);
        }
    }
    res.status(201).send();
});

module.exports = router;