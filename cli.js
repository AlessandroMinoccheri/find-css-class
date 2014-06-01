#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var find = require('./index');

var args = process.argv[2];
if((args != null) && (args != '') && (args != undefined)){
	find(args, function (err, version) {
		if (err) {
			console.error(err);
			process.exit(1);
			return;
		}

		console.log(version);
	});
}

return;
