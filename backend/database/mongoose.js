const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/taskmanager', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log('Connected to database...'))
    .catch( (error) => console.log('could not connect to databse', error))

module.exports = mongoose;