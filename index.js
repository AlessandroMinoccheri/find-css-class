"use strict"

var fs = require('fs');

module.exports = function (name, cb) {
	console.log('yyy');
	fs.readFile('/Users/alessandrominoccheri/Sites/klikkahotel.com/css/backend/_style.css', 'utf8', function (err,data) {
		if (err) {
		    return console.log(err);
		}

		console.log(data);
	});
};
