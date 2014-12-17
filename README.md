meta-yaml
=========

JSON meta file generator for <a href:"https://github.com/saltukalakus/rsa-yaml.js">rsa-yaml.js</a>

It does some very simple thing for now. Opens up a YML file, finds keys which has double quoted values. Generates a meta json object for detected keys and returns.

sample
=========

YML file content:

    ---
    key1: 1
    key2: 'val2'
    key3: "val3"
    key4: true
    key5:
     - { key6: 'val6.1'  , key7 : "val7.1" }
     - { key6: 'val6.2'  , key7 : "val7.2" }   

Generated JSON meta object:

    { double_quotes:
      [ 'key3',
        'key7' ] };


usage
========
    fs   = require('fs');
    myml = require('meta-yaml');
    var json_out = myml.parse(fs.readFileSync("test-file.yml", 'utf8'));

    
install
=========

    npm install meta-yaml