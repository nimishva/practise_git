const mongojs = require("mongojs");
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let mongodb;


url = 'mongodb://localhost:27017/ateam'
global.db = mongojs(url);

mongoose.connect('mongodb://localhost:27017/ateam', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}).then((res) => {
    console.log(' ########### Connected to mongDB ###########');
    mongodb = res;
})
.catch((err) => {
    console.log('Error in connecting to mongoDb');
});;

const connectFn = function () {
    mongoose.connection.on('open', function () {
        console.log('Mongoose connected!!!');
    });
 }

 function getFn(){
    return mongodb;
}

function closeFn(){
    mongodb.close();
}

module.exports = { connectFn,  getFn, closeFn };