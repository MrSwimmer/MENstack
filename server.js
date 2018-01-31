const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
// server.js
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect("mongodb://localhost:27017/", function (err, db) {

  if (err) {
    return console.log(err);
  }
  require('./app/routes')(app, db);
  // взаимодействие с базой данных
  var port = process.env.PORT || 5000;
  app.listen(port, function () {
    console.log("Listening on " + port);
  });
  //db.close();
});
