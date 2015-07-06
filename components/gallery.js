'use strict';

var helpers = require('./dom-helpers.js');

module.exports = gallery;

function gallery(posts, root) {
  var container = document.createElement('div');
  container.setAttribute('class', 'tagplay-gallery');

  posts.forEach(function(post) {
    var elem = widget(post);
    container.appendChild(elem);
  });

  root.appendChild(container);
}

function widget (post, opt, callback) {
  if (typeof opt === 'function') {
    callback = opt;
    opt = undefined;
  }
  if (!opt) opt = {};

  var container = document.createElement('div');
  container.setAttribute('class', 'tagplay-media-container');
  container.appendChild(helpers.media(post));
  return container;
}
