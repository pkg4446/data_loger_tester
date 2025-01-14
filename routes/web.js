const express   = require('express');
const html      = require('../api/html_viewer');
const router    = express.Router();

router.get('/', async function(req, res) {
    const css = html.css("main");
    let js  = html.js("main");
    let web_page = await html.page("main",css,js);
    res.status(201).send(web_page);
});

module.exports = router;