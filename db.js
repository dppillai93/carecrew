var MongoClient = require('mongodb').MongoClient;

//crappy singleton pattern
var db = {};

module.exports = db;

// Connect to the db
MongoClient.connect("mongodb://blog.theworldj.tk:27017/exampleDb", function(err, _db) {
  if(!err) {
    console.log("connected to mongo :) !");
    db = _db;
  }
});
