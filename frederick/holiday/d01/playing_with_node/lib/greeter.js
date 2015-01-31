'use strict';

var Greeter = function() {};

Greeter.prototype.helloWorld = function() {
	return "Hello World!";
};

module.exports = Greeter;