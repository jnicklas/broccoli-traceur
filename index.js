'use strict';
var Filter = require('broccoli-filter');
var traceur = require('traceur');

function TraceurFilter(inputTree, options) {
	if (!(this instanceof TraceurFilter)) {
		return new TraceurFilter(inputTree, options);
	}

	this.inputTree = inputTree;
	this.options = options || {};
}

TraceurFilter.prototype = Object.create(Filter.prototype);
TraceurFilter.prototype.constructor = TraceurFilter;

TraceurFilter.prototype.extensions = ['js'];
TraceurFilter.prototype.targetExtension = 'js';

TraceurFilter.prototype.processString = function (str) {
	return traceur.compile(str, this.options).js;
};

module.exports = TraceurFilter;
