var express = require('express');

var app = express();
var port = process.env.PORT || 8000;

app.use(express.static('public'));

console.log('server listening on port ' + port);
app.listen(port);
