const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports  =   {
        uri: 'mongodb://gagan:gagan@ds139675.mlab.com:39675/mean',
        secret : crypto,
        db:'mean'
    }