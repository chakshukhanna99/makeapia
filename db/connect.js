const mongoose = require('mongoose');

const connectdb = (uri) => {
    console.log("connnect db");
    return mongoose.connect(uri);
};

module.exports = connectdb;
