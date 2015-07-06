'use strict';

var helpers = require('./dom-helpers.js');

module.exports = menu;

function menu(post, root) {
  var items = post.text.split(/\n+/);

  var elements = [];
  var list = null;

  var numHeaders = 0;

  items.forEach(function(item) {
    if (item.indexOf('$') === -1) {
      elements.push(helpers.header(item.trim(), 'h3'));
      numHeaders++;
      list = null;
    }
    else {
      if (!list) {
        list = document.createElement('ul');
        elements.push(list);
      }
      list.appendChild(menuItem(item));
    }
  });

  var colClasses = 'col-4 offset-1 col-tablet-5';

  var col1 = document.createElement('div');
  col1.setAttribute('class', colClasses + ' menu-col-1');

  var col2 = document.createElement('div');
  col2.setAttribute('class', colClasses);

  var cols = [col1, col2];

  var headerCount = 0;

  elements.forEach(function(element) {
    if (element.nodeName === 'H3') {
      headerCount++;
    }
    cols[Math.round(headerCount / numHeaders)].appendChild(element);
  });

  root.appendChild(col1);
  root.appendChild(col2);
}

function menuItem(text) {
  var priceIndex = text.lastIndexOf('$');

  var li = document.createElement('li');
  li.appendChild(document.createTextNode(text.substring(0, priceIndex).trim()));
  li.appendChild(helpers.span(text.substring(priceIndex).trim(), 'price'));
  return li;
}
