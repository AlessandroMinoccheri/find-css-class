"use strict"

var fs = require('fs');

module.exports = function (name, cb) {
	fs.readFile('/Users/alessandrominoccheri/Sites/klikkahotel.com/css/backend/_style.css', 'utf8', function (err,data) {
		if (err) {
		    return console.log(err);
		}

		var class_to_find = 'label-blu';
		//var found = css.match(/([#|\.]?)([\w|:|\s|\.]+)/gmi).length;*/
		var found = data.match(/\.label-blu([,:\s\.][^\{]*)?\{/gmi).length;
		console.log('found: ' + found);
	});
};
