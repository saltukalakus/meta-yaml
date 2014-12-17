_ = require('lodash');

module.exports.parse = function(value) {

    // get keys of key(space):(space)"value" pattern.
    var matches = String(value).match(/\S*(?=\s*:\s*\".*\")/gmi);

    // remove duplicates and null items
    var unimatches = _.uniq(matches, false).filter(function(e){return e});

    // generate json
    var json_out = {double_quotes:unimatches};

    return json_out;
};