var cheerio = require('cheerio');
var data = require('./mitcourses_one')
//use the line above for training purpose

// var data = '<h3>Title 1</h3>space<h3>Title 2</h3>space<h3>Title 3</h3>space<h3>Title 4</h3>';

var $ = cheerio.load(data);
// we loading the data here

var matches = [];

$('h3').each(function(i,element){
    matches.push($(element).text())
})
// this will grab and push everything into the h3 tag

console.log(matches);

var cheerio = require('cheerio');
var data = require('./mitcourses_one')
//use the line above for training purpose

// var data = '<h3>Title 1</h3>space<h3>Title 2</h3>space<h3>Title 3</h3>space<h3>Title 4</h3>';

var $ = cheerio.load(data);
// we loading the data here

var matches = [];

$('h3').each(function(i,element){
    matches.push($(element).text())
})
// this will grab and push everything into the h3 tag

console.log(matches);

