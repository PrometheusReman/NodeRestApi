'user strict';
const config = require('config');
var mysql = require('mysql');


//console.log(config[3]);
const DBOptions = {
    host: config[3].get('MYSQL.HOST'),
    user: config[3].get('MYSQL.USER'),
    password: config[3].get('MYSQL.PASSWORD'),
    database: config[3].get('MYSQL.DATABASE'),
    dialect: config[3].get('MYSQL.DIALECT'),

    pool: {
        min: 0,
        max: 100,
    }
};
// var connection;

var connection = mysql.createPool(
    {
        host: DBOptions.host,
        user: DBOptions.user,
        password: DBOptions.password,
        database: DBOptions.database,
        dialect: DBOptions.dialect,
        timezone: "Asia/Dhaka",
        define: { timestamps: false, charset: "utf8", dialectOptions: { collate: "utf8_general_ci" } },        
        pool: {
            max: 100,
            min: 0,
            acquire: 30000,
            //idle: 20000,
        },
    });
//console.log(connection);
//return connection;

exports.createConnection = connection;
exports.mysql = mysql;