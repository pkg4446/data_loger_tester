const express       = require('express');
const favicon       = require('serve-favicon');
const path          = require('path');
const file_system   = require('./api/fs_core');
const path_data     = require('./api/fs_path');
const index_router  = require('./routes');

if(!file_system.Sync_check(path_data.data())) file_system.Sync_folderMK(path_data.data());

const app   = express();
const port  = 3003;

app.use(express.json());
app.use(favicon(path.join(__dirname, '/public', 'favicon.ico')));
app.use('/public',express.static(__dirname +'/public'));
app.use('/', index_router);

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});