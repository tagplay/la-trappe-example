'use strict';

var helpers = require('./dom-helpers.js');

module.exports = text;

function text(post, container) {
  container.appendChild(document.createTextNode(post.text));
}