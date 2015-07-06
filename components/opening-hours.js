'use strict';

var helpers = require('./dom-helpers.js');

module.exports = open;

function open(post, root) {
  root.appendChild(widget(post));
}

function widget (post) {
  var text = post.text.split('\n').filter(Boolean);

  var dayMap = {'mon': "Monday", 'tue': "Tuesday", 'wed': "Wednesday", 'thu': "Thursday", 'fri': "Friday", 'sat': "Saturday", 'sun': "Sunday"};

  var dl = document.createElement('dl');
  text.forEach(function(line) {
    var splitIndex = line.indexOf(':');
    var days = line.substring(0, splitIndex).split('-');

    var dt = document.createElement('dt');
    dt.appendChild(document.createTextNode(days.map(function(day) { return dayMap[day]; }).join(' - ')));

    var dd = document.createElement('dd');
    dd.appendChild(document.createTextNode(line.substring(splitIndex + 1).trim()));

    dl.appendChild(dt);
    dl.appendChild(dd);
  });
  return dl;
}
