
const config = require('config');
const mongoose = require('mongoose');

var mongodb;

var options =
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 100, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0

};

const DBOptions = {
    url: config[0].get('MONGO.URL'),
};
//console.log(DBOptions);

mongoose.connect(DBOptions.url, options).then(() => {
    console.log("Successfully connected to the database ");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});;

exports.mongoConncection = mongoose; 