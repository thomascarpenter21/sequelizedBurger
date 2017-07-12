var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var Burger = require("./models")["Burger"]

Burger.sync();
var app = express();

app.use(express.static(__dirname + "/public"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController.js");

app.use("/", routes);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})