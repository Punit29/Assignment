const mongoose = require('mongoose');

// DB connection - mongodb://<host>/<databaseName>


//ES6 Promise
mongoose.Promise = global.Promise;


before((done) => {
    mongoose.connect('mongodb://localhost:27017/learningMongo');

    mongoose.connection.once('open', () => {
        console.log('Connection.....');
        done();
    }).on('error', (error) => {
        console.log('Connection error:', error)
    }); 
})
