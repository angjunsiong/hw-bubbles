// a asynchronous function
// get a code to wait before proceeding to the next line ("blocking"), without waiting for the line before to complete
// we need to "unblock" after we "block" it then

// ??? why do we need npm init?
// for fetching 'npm install node-fetch --save' in node.js
// to inspect what has been installed thus far, type more package.json or ls inside 

var fetch = require ('node-fetch');

var url = 'http://student.mit.edu/catalog/m1a.html';

var makeRequest = async function(url){
    var response = await fetch(url)
    var text = await response.text();
    // wait for this to come back, dont chiong to next line
    return text
}
// this is how you define a asynchronous function

makeRequest(url).then((text) => {
    console.log(text);
});

// then is another keyword, like saying what happens after "makeRequest.(url)"
// the funny syntax you see is due to us putting a function into the then function
// "text" after ".then" is new function we define