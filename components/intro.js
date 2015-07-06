'use strict';

var helpers = require('./dom-helpers.js');

module.exports = intro;

function intro(post, container) {
  var elem = widget(post);
  container.appendChild(elem);
}

function widget (post, opt, callback) {
  if (typeof opt === 'function') {
    callback = opt;
    opt = undefined;
  }
  if (!opt) opt = {};

  var text = post.text.split('\n\n').filter(Boolean);
  var title = text.splice(0, 1);

  var container = document.createElement('div');
  //container.setAttribute('class', 'tagplay-media-container');
  container.appendChild(helpers.header(title));

  text.forEach(function(txt) {
    container.appendChild(helpers.paragraph(txt));
  });

  return container;
}
