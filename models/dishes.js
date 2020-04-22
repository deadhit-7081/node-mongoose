const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creatind commentSchema
const commentSchema = new Schema({
    rating:{
        type : Number,
        min : 1,
        max : 5,
        required : true
    },
    comment : {
        type : String,
        required : true
    },
    author :{
        type : String,
        required : true
    }
},{
    timestamps : true //automatically include time stamp of when it created and last updated
});

//create dishSchema
const dishSchema = new Schema({
    name :{
        type : String,
        require : true,
        unique : true
    },
    description : {
        type : String,
        require : true
    },
    comments : [commentSchema]
},{
    timestamps : true //automatically include time stamp of when it created and last updated
});

//constructing model
var Dishes = mongoose.model('Dish',dishSchema);

module.exports = Dishes;
