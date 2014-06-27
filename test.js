'use strict';
var assert = require('assert');
var find = require('./index');

it('should get match in css test file', function (cb) {
	find('clear', 'test/style.css', function (err, finded) {
		assert(!err, err);
		assert(finded);
		cb('find');
	});
});

it('should get match in css test file', function (cb) {
	find('clear', 'test/test.html', function (err, finded) {
		assert(!err, err);
		assert(finded);
		cb('find');
	});
});

it('should get match in css test file', function (cb) {
	find('clear', 'test/test.php', function (err, finded) {
		assert(!err, err);
		assert(finded);
		cb('find');
	});
});

it('should get match in css test file', function (cb) {
	find('clear', 'test/test.ctp', function (err, finded) {
		assert(!err, err);
		assert(finded);
		cb('find');
	});
});


it('should get match in css test file', function (cb) {
	find('clear', 'test/test.tpl', function (err, finded) {
		assert(!err, err);
		assert(finded);
		cb('find');
	});
});

it('should get match in css test file', function (cb) {
	find('clear', 'test/test.asp', function (err, finded) {
		assert(!err, err);
		assert(finded);
		cb('find');
	});
});
