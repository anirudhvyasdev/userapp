// db.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:pass@cluster0-shard-00-00-y5oqv.mongodb.net:27017,cluster0-shard-00-01-y5oqv.mongodb.net:27017,cluster0-shard-00-02-y5oqv.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
