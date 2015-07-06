'use strict';

var helpers = require('./dom-helpers.js');

module.exports = address;

function address(post, container) {
  var elem = widget(post);
  container.appendChild(elem);
}

function widget (post, opt, callback) {
  if (typeof opt === 'function') {
    callback = opt;
    opt = undefined;
  }
  if (!opt) opt = {};

  var text = post.text.split(', ');

  var container = document.createElement('p');
  container.setAttribute('class', 'adr');
  container.appendChild(helpers.span(text[0], 'street-address'));
  container.appendChild(document.createElement('br'));
  container.appendChild(helpers.span(text[1], 'locality'));
  container.appendChild(document.createTextNode(', '));
  container.appendChild(helpers.span(text[2], 'country'));

  return container;
}
