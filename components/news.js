'use strict';

var img = require('img');
var helpers = require('./dom-helpers.js');

module.exports = news;

function news(posts, root) {
  var container = document.createElement('div');
  container.setAttribute('class', 'news-container');
  container.appendChild(helpers.header('News'));

  posts.forEach(function(post) {
    var elem = widget(post);
    container.appendChild(elem);
  });

  root.appendChild(container);
}

function widget (post) {
  var src = post.image.sources[0].url;
  var div = document.createElement('div');
  div.setAttribute('class', 'news-item');
  div.appendChild(img(src));
  div.appendChild(helpers.paragraph(post.stripped_text));

  return div;
}
/*

        <div class="news-item">
          <img src="/assets/images/12.jpg" alt="">

          <p>Thinking about opening other restaurants. We also hired a new chef that we love and are considering buying new glasses for the organic beer. Stay tuned for further updates.</p>
        </div>*/
