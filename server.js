'use strict';

// TODO: Check NewRelic
// require('newrelic');

var express = require("express");
var compression = require("compression");

var app = express();
app.use(compression());
app.use(express.static(__dirname + "/dist"));

app.listen(process.env.PORT || 3000, function() {
    console.log("App running");
});