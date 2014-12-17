fs   = require('fs');
myml = require('./');

var json_out = myml.parse(fs.readFileSync("test-file.yml", 'utf8'));
console.log(json_out);
