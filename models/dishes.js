const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
},{
    timestamps : true //automatically include time stamp of when it created and last updated
});

//constructing model
var Dishes = mongoose.model('Dish',dishSchema);

module.exports = Dishes;
