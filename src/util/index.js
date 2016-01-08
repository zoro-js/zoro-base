
var util = {};

util.o = util.emptyObj = {};

util.f = util.emptyFunc = function() {};

util.regBlank = util.regWhiteSpace = /\s+/ig;

module.exports = util;

var arr = ['object', 'type', 'url', 'id'];
arr.forEach(function(name) {
    require('./' + name);
});