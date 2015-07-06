'use strict';

var helpers = require('./dom-helpers.js');

module.exports = today;

function today(posts, root) {
  var post = posts[0];
  root.appendChild(helpers.paragraph(post.stripped_text, 'tagplay-media-text'));
}
