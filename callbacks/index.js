'use strict';
var list = [];
list = list.concat(require('./help'));
list = list.concat(require('./menu'));
list = list.concat(require('./define'));
list = list.concat(require('./math'));
module.exports = list;
