
// ------------------------------------
// Require Node.js Libraries
// ------------------------------------

var express = require('express');
var app = express();
var http = require('http');

// ------------------------------------
// Create basic HTTP Server
// ------------------------------------

http = http.Server(app);

// ------------------------
// Route our Assets
// ------------------------------------

app.use('/assets/', express.static(__dirname + '/public/assets/'));

// ------------------------------------
// Route our Home Page
// ------------------------------------

app.get('/**/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

// ------------------------------------
// Start Server
// ------------------------------------

http.listen(process.env.PORT || 3000, process.env.IP || "127.0.0.1", function(){
  var addr = http.address();
  console.log("Server started at", addr.address + ":" + addr.port);
});
