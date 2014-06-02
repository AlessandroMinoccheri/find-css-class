#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var find = require('./index');

var find_class = process.argv[2];
var folder = process.argv[3];
if((find != null) && (find != '') && (find != undefined) & (folder != null) && (folder != '') && (folder != undefined)){
	find(find_class, folder, function (err, finded) {
		if (err) {
			console.error(err);
			process.exit(1);
			return;
		}

		console.log(finded);
	});
}

return;
