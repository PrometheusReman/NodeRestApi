'use strict';

const getHqDetailsModel = require('../../../../models/1/Shipper/get/getHqDetailsModel.js'); 
const bodyParamCheck = require('../../../../../libs/helper/bodyParamCheck'); 

exports.getHqDetails = function (req, res) 
{
    var status ; 
    var value = {}; 
    var finalOutput = {}; 

    if(req.body)
    {
        value.hqName = req.body.hqName; 
        
        status = bodyParamCheck.bodyValidationCheck(value);
        if(status != true)
        {
            finalOutput.errorMessage = status ; 
            res.send(finalOutput);
        }
        else
        {
            getHqDetailsModel.getHqDetails(value, function(err, result)
            {
                if (err)
                {
                    res.send(err);
                }
                else
                {
                    res.send(result);
                }
            });
        }
    }
    else
    {
        finalOutput.errorMessage = 'Parameters are mising.' ;
        res.send(finalOutput);
    }
};