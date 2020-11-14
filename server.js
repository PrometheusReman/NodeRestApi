const http = require('http');
const https = require('https');
const fs = require('fs');
const config = require('./common/config/env.config.js');
const express = require('express');
const bodyParser = require('body-parser');
var morgan  = require('morgan');
var cookieParser = require('cookie-parser');
var path = require('path');
const helmet = require("helmet");
const cors = require('cors');
//const mongoose = require(mongoose);
// const options = {
//     key: fs.readFileSync('/etc/letsencrypt/live/www.example.com/privkey.pem'),
//     cert: fs.readFileSync('/etc/letsencrypt/live/www.example.com/fullchain.pem')
//  };
 

const app = express();

app.use(cors()); // Add Cors as a middlewareopen for IOS app

app.use(helmet()); // Add Helmet as a middlewareopen

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Origin ,Authorization, Content-Type, X-Csrf-Token, X-Requested-With, Range');
    if (req.method === 'OPTIONS') 
    {
        return res.send(200);
    } else {
        return next();
    }
});
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(bodyParser.json());

app.use('/',express.static(path.join(__dirname, 'app/public')));

// 1 starts 

var Routes = require('./app/routes/route');

Routes.API.userRoute1.userRoute1(app);

// 1 Ends


//api.authRouter(app);
const port = config.port || 3000;
app.listen(port, function () {
    console.log('app listening at port %s', port);
});