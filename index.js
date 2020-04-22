const mongoose = require('mongoose');

const Dishes = require('./models/dishes');
//establishing connection to mongo server and database

const url = 'mongodb://localhost:27017/conFusion';
const connect  = mongoose.connect(url);

connect.then((db) => 
{
    console.log('Connected Correctly to server');

    //creating new dish
    //create method creates and save added dishes automaticly and return promise
    Dishes.create({
        name : 'Uthappizza',
        description : "test"
    })
    .then((dish) =>
    {
        console.log(dish);
        return Dishes.find({}).exec();//The exec will ensure that this is executed and that it will return a promise and so that promise will be returned so that it can then chain the method to the remaining ones.
    })
    .then((dishes) =>
    {
        console.log(dishes);

        return Dishes.remove({});//remove all dishes from database
    })
    .then(() =>
    {
        return mongoose.connection.close();
    })
    .catch((err) =>
    {
        console.log(err);
    })
});