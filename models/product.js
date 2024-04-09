const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:[true,"price must be provided"]
    },
    featured:{
        type:Boolean
    },
    rating:{
        type:String,
        default:4.9,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:["apple","samsung","dell"],
            message:` is not supported`
        },
    },
    
});

module.exports = mongoose.model('Product',productSchema)