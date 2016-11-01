
var normalize = require('diacritics').remove;
var zuera = require('./zuera.json');

zuera.contains = function (str) {
    return zuera.indexOf(normalize(str).toUpperCase()) !== -1
}

module.exports = zuera;
