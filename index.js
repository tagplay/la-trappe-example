'use strict';

var Tagplay = require('tagplay');

var intro = require('./components/intro.js');
var gallery = require('./components/gallery.js');
var address = require('./components/address.js');
var text = require('./components/text.js');
var opening_hours = require('./components/opening-hours.js');
var menu = require('./components/menu.js');
var review = require('./components/review.js');
var news = require('./components/news.js');
var today = require('./components/today.js');

// Settings
var project_id = 'b1afcc8a-1be7-4671-9818-b56c22f4f262';
var config = { token: process.env.TOKEN }; // Not needed for public feeds.

var client = new Tagplay(config);

client.listPost(project_id, '59d38dfe-0f07-4ae6-8922-f090aeb86f0b', function(err, posts) {
  intro(posts.data[0], document.getElementsByClassName('introduction-text')[0]);
});

client.listPost(project_id, '74ee9fe4-221a-4271-b85b-59e3867c2ad9', function(err, posts) {
  gallery(posts.data, document.getElementsByClassName('ugc-food')[0]);
});

client.listPost(project_id, 'c3b5ff5e-bf31-4efa-a602-8c3d131fe732', function(err, posts) {
  Array.prototype.forEach.call(document.getElementsByClassName('address'), function(element) {
    address(posts.data[0], element);
  });
});

client.listPost(project_id, '9a36062a-5761-43ba-8bc6-0b2877ca869b', function(err, posts) {
  Array.prototype.forEach.call(document.getElementsByClassName('tel'), function(element) {
    text(posts.data[0], element);
  });
});

client.listPost(project_id, '96994580-c4d8-4e84-889c-0b9d3047bdbf', function(err, posts) {
  Array.prototype.forEach.call(document.getElementsByClassName('opening-hours'), function(element) {
    opening_hours(posts.data[0], element);
  });
});

client.listPost(project_id, '6cd6142e-7521-4e57-a1bf-28729858cf58', function(err, posts) {
  menu(posts.data[0], document.getElementsByClassName('menu-feed')[0]);
});

client.listPost(project_id, '355dbd94-a44c-4ca1-b1a0-f20793027c2d', function(err, posts) {
  review(posts.data, document.getElementsByClassName('review-feed')[0]);
});

client.listPost(project_id, '4934df8e-1cf9-47e5-881b-2de194fda52f', function(err, posts) {
  news(posts.data, document.getElementsByClassName('news-feed')[0]);
});

client.listPost(project_id, '53f02468-62da-4290-bfa7-71f3fccce63c', function(err, posts) {
  today(posts.data, document.getElementsByClassName('today-feed')[0]);
});

client.listPost(project_id, '5df55ca3-eb98-4254-8622-f2d805bc4b96', function(err, posts) {
  text(posts.data[0], document.getElementsByClassName('payment-methods')[0]);
});

client.listPost(project_id, '4f7b671c-c517-4382-a537-1bbf8ac0565b', function(err, posts) {
  text(posts.data[0], document.getElementsByClassName('parking')[0]);
});
