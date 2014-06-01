"use strict"

var fs = require('fs');

RegExp.quote = function(str) {
  return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
};

module.exports = function (name, cb) {
	fs.readFile('/Users/alessandrominoccheri/Sites/klikkahotel.com/css/backend/_style.css', 'utf8', function (err,data) {
		if (err) {
		    return console.log(err);
		}

		var class_to_find = 'label-blu';
		var reg = new RegExp('\\.' + RegExp.quote(class_to_find) + '([,:\\s\\.][^\\{]*)?\\{', 'gmi');
		var found = data.match(reg);
		
		if((found != '') && (found != null))
			found = found.length;
		else
			found = 0;

		console.log('found: ' + found);
	});
};
