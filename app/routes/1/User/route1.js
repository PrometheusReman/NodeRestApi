'use strict';

const ValidationMiddleware = require('../../../../common/middleware/authValidation');

//Version 1

const getHqDetailsController = require('../../../controllers/1/User/get/getHqDetails');

const apiversion = '1';

const userRoute1 = function (app)
{
    //Version 1
    //Post routes
    app.post('/api/'+apiversion+'/getHqDetails',[
        ValidationMiddleware.validationOfJWT,
        getHqDetailsController.getHqDetails
    ]);
};

module.exports = {userRoute1};

