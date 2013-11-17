var fs = require('fs');
var http = require('http');
var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var cluster = require('cluster');
var minify = require('express-minify');

var routes = require('./routes/');
var user = require('./routes/user');
var stats = require('./routes/stats');
var urls = require('./routes/urls');
var logs = require('./routes/logs');
var system = require('./routes/system');
