'use strict';

require('newrelic');

var express = require("express");
var compression = require("compression");
var helmet = require("helmet");

var app = express();
app.use(helmet());
app.use(compression());
app.use(express.static(__dirname + "/dist"));

app.listen(process.env.PORT || 3000, function() {
    console.log("App running");
});