'use strict';

var helpers = require('./dom-helpers.js');

module.exports = review;

function review(posts, root) {
  var container = document.createElement('div');
  container.setAttribute('class', 'tagplay-gallery');

  posts.forEach(function(post) {
    var elem = widget(post);
    container.appendChild(elem);
  });

  root.appendChild(container);
}

function widget (post) {
  var container = document.createElement('div');
  container.setAttribute('class', 'tagplay-media-container');
  container.appendChild(helpers.paragraph(post.stripped_text, 'tagplay-media-text'));
  // needs design, we need to show from how the message is
  //container.appendChild(helpers.span(' - ' + post.provider.username));
  return container;
}
