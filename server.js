//SERVER.JS
var express = require("express");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

//API & HTML ROUTING GO HERE
require("./routes/apiRoutes") (app);
require("./routes/htmlRoutes") (app);

app.listen(PORT, function(){
    console.log("App Listening on: " + PORT);
})