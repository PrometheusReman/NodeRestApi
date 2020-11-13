'use strict'; 

var connection = require('../../../../../libs/dbConnect/mysql/mysqlCon.js'); 
var allSqlQueryString1 = require('../../allSqlQueryString1.js'); 

var _ = require('underscore'); 

const getHqDetails = function (value , result) 
{
    connection.createConnection.getConnection(function (err,sql)  
    {
        if (err) return result(new Error('Failed to connect mysql database '), null);
        sql.query(allSqlQueryString1.getHqDetailsModel.getHqDetails, [value.hqName],function (err, res) 
        {
            if(err)
            { 
                result(err, null);
            }
            else
            {
                result(null, res);                    
            }
        });
        sql.release();
    }); 
};

module.exports = {getHqDetails};
