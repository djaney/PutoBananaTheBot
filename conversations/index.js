'use strict';
var list = [];
list = list.concat(require('./hello.json'));
list = list.concat(require('./knock-knock.json'));
module.exports = list;
