const express = require('express'),
    session = require('express-session'),
    path = require('path'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    http = require('http'),
    https = require('https'),
    _ = require('lodash'),
    url = require('url'),
    dotenv = require('dotenv');

const app = express();
const routes =require('./routes/index');
const port =2000;

app.use('/',routes);
const httpServer = http.createServer(app);
httpServer.listen(port, () => {
    console.log(`서버 시작 :: ${port} 포트`);
    console.log(`__dirname: ${__dirname}`);
    console.log(`__filename: ${__filename}`);
    console.log(`path.resolve('') ${path.resolve('')}`);
    
    console.log(``);

});