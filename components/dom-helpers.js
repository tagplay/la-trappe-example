'use strict';

var img = require('img');

exports.insertAfter = insertAfter;
exports.media = media;
exports.paragraph = paragraph;
exports.header = header;
exports.span = span;


function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function media(post) {
  var src = post.image.sources[0].url;

  var mediaElem = document.createElement('div');
  mediaElem.setAttribute('class', 'tagplay-media');

  var a = link(post.provider.origin || src, 'tagplay-media-link');
  var image = img(src);
  image.setAttribute('class', 'tagplay-media-object');

  a.appendChild(image);
  mediaElem.appendChild(a);

  return mediaElem;
}

function paragraph(txt, className) {
  var el = document.createElement('p');
  if (className) el.setAttribute('class', className);
  var textNode = document.createTextNode(txt);
  el.appendChild(textNode);
  return el;
}

function link(href, className) {
  var linkElem = document.createElement('a');
  linkElem.setAttribute('href', href);
  if (className) linkElem.setAttribute('class', className);
  return linkElem;
}

function header(txt, headerSize) {
  var h = document.createElement(headerSize || 'h2');
  var textNode = document.createTextNode(txt);
  h.appendChild(textNode);
  return h;
}

function span(txt, className) {
  var el = document.createElement('span');
  if (className) el.setAttribute('class', className);
  var textNode = document.createTextNode(txt);
  el.appendChild(textNode);
  return el;
}
