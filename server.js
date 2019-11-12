//Dependencies
var express = require("express");
var app = express();
var bodyParser = require('body-parser');

//Static Server Settings
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

//SSL Cert Setting
// var https = require('https');
// var fs = require('fs');
// var https_options = {
//   key: fs.readFileSync("/path/to/private.key"),
//   cert: fs.readFileSync("/path/to/your_domain_name.crt"),
//   ca: [
//           fs.readFileSync('path/to/CA_root.crt'),
//           fs.readFileSync('path/to/ca_bundle_certificate.crt')
//        ]
// };

app.get('/',function(req, res){
  static_serve('index.html',res);
});
module.exports = app;
const PORT = process.env.PORT || 8080;
var server = app.listen(PORT, function(){
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});
