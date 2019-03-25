var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Tax = require('./api/models/model'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
var dbHost="mongodb+srv://rakesh:raki1234@cluster0-xz74s.mongodb.net/rakesh"
// mongoose.connect('mongodb://127.0.0.1:27017/rakesh'); 
mongoose.connect(dbHost)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route


app.listen(port);


console.log("server started at http://localhost:" + port);