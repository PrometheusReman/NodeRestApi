const appRoot = require('app-root-path');
const {createLogger,transports} = require('winston');
const {format} = require('winston');
const moment  = require ('moment');
const config  = require ('config');
const dateFormat = require('../utility/dateformat');

const { combine, label, timestamp, printf } = format;

const myFormat = printf(info => `${info.timestamp} [${info.level}]: ${info.label} - ${info.message}`);

function bodyValidationCheck( value )
{
    var error = '';
    if(value)
    {
        for (var key in value) 
        {
            if((value[key]) || (value[key] == "" ))
            {
                if((value[key] == undefined) || (value[key] === ""))
                {
                    error =  error + ' ' + key;
                }
            }
            else
            {
                if(value[key] == 0)
                continue;
                error =  error + ' ' + key;
            }
        }
        
        if(error != '')
        {
            error = 'One of the following field or value is mising ' +error;
            return error;
        }
        else
        {
            return true;
        }
    }
    else
    {
        error = 'Parameters are mising';
        return error;
    }  
} 

module.exports = { bodyValidationCheck } ; 