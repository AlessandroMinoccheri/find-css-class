'use strict';
var assert = require('assert');
var find = require('./index');

it('should get match in css test file', function (cb) {
	find('test', 'style.css', function (err, finded) {
		assert(!err, err);
		assert(finded);
		cb();
	});
});
