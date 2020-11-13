const jwt = require('jsonwebtoken'),
secret = require('../config/env.config.js').jwt_secret,
crypto = require('crypto');

exports.validationOfJWT = (req, res, next) =>
{
    if (req.headers['authorization']) 
    {
        try 
        {
            let authorization = req.headers['authorization'].split(' ');
            if (authorization[0] !== 'Bearer') {
                return res.status(401).send();
            } else {
                req.jwt = jwt.verify(authorization[1], secret);
                return next();
            }

        } catch (err) 
        {
            console.log(err);
            if(err.message == "jwt expired")
            {
                return res.status(202).send("Token Expired");
            }
            else
            {
                return res.status(403).send("Token authorization failled");
            }
        }
    } else {
       
        return res.status(401).send("Token Not Found");;
    }
};

