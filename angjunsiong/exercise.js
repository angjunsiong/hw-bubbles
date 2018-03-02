var exercise = {};

// exercise 2' packages
var fetch = require('node-fetch');
var fs = require('fs');
var request = require('sync-request')

// exercise 4's package
var minify = require('html-minifier').minify;

// exercise 5's package
var cheerio = require('cheerio');

exercise.one = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Return the address of all the html pages in
    //  the MIT course catalog - string array.
    //  For example, the first page for Course 1 is:
    //  http://student.mit.edu/catalog/m1a.html
    //
    //  See homework guide document for more info.
    // -----------------------------------------------

    var addresses = [];
    addresses.push('http://student.mit.edu/catalog/m1a.html');
    addresses.push('http://student.mit.edu/catalog/m1b.html');
    addresses.push('http://student.mit.edu/catalog/m1c.html');
    addresses.push('http://student.mit.edu/catalog/m2a.html');
    addresses.push('http://student.mit.edu/catalog/m2b.html');
    addresses.push('http://student.mit.edu/catalog/m2c.html');
    addresses.push('http://student.mit.edu/catalog/m3a.html');
    addresses.push('http://student.mit.edu/catalog/m3b.html');
    addresses.push('http://student.mit.edu/catalog/m4a.html');
    addresses.push('http://student.mit.edu/catalog/m4b.html');
    addresses.push('http://student.mit.edu/catalog/m4c.html');
    addresses.push('http://student.mit.edu/catalog/m4d.html');
    addresses.push('http://student.mit.edu/catalog/m4e.html');
    addresses.push('http://student.mit.edu/catalog/m4f.html');
    addresses.push('http://student.mit.edu/catalog/m4g.html');
    addresses.push('http://student.mit.edu/catalog/m5a.html');
    addresses.push('http://student.mit.edu/catalog/m5b.html');
    addresses.push('http://student.mit.edu/catalog/m6a.html');
    addresses.push('http://student.mit.edu/catalog/m6b.html');
    addresses.push('http://student.mit.edu/catalog/m6c.html');
    addresses.push('http://student.mit.edu/catalog/m7a.html');
    addresses.push('http://student.mit.edu/catalog/m8a.html');
    addresses.push('http://student.mit.edu/catalog/m8b.html');
    addresses.push('http://student.mit.edu/catalog/m9a.html');
    addresses.push('http://student.mit.edu/catalog/m9b.html');
    addresses.push('http://student.mit.edu/catalog/m10a.html');
    addresses.push('http://student.mit.edu/catalog/m10b.html');
    addresses.push('http://student.mit.edu/catalog/m11a.html');
    addresses.push('http://student.mit.edu/catalog/m11b.html');
    addresses.push('http://student.mit.edu/catalog/m11c.html');
    addresses.push('http://student.mit.edu/catalog/m12a.html');
    addresses.push('http://student.mit.edu/catalog/m12b.html');
    addresses.push('http://student.mit.edu/catalog/m12c.html');
    addresses.push('http://student.mit.edu/catalog/m14a.html');
    addresses.push('http://student.mit.edu/catalog/m14b.html');
    addresses.push('http://student.mit.edu/catalog/m15a.html');
    addresses.push('http://student.mit.edu/catalog/m15b.html');
    addresses.push('http://student.mit.edu/catalog/m15c.html');
    addresses.push('http://student.mit.edu/catalog/m16a.html');
    addresses.push('http://student.mit.edu/catalog/m16b.html');
    addresses.push('http://student.mit.edu/catalog/m17a.html');
    addresses.push('http://student.mit.edu/catalog/m17b.html');
    addresses.push('http://student.mit.edu/catalog/m18a.html');
    addresses.push('http://student.mit.edu/catalog/m18b.html');
    addresses.push('http://student.mit.edu/catalog/m20a.html');
    addresses.push('http://student.mit.edu/catalog/m21a.html');
    addresses.push('http://student.mit.edu/catalog/m21Aa.html');
    addresses.push('http://student.mit.edu/catalog/mCMSa.html');
    addresses.push('http://student.mit.edu/catalog/m21Wa.html');
    addresses.push('http://student.mit.edu/catalog/m21Ga.html');
    addresses.push('http://student.mit.edu/catalog/m21Ha.html');
    addresses.push('http://student.mit.edu/catalog/m21Hb.html');
    addresses.push('http://student.mit.edu/catalog/m21La.html');
    addresses.push('http://student.mit.edu/catalog/m21Ma.html');
    addresses.push('http://student.mit.edu/catalog/mWGSa.html');
    addresses.push('http://student.mit.edu/catalog/m22a.html');
    addresses.push('http://student.mit.edu/catalog/m22b.html');
    addresses.push('http://student.mit.edu/catalog/m22c.html');
    addresses.push('http://student.mit.edu/catalog/m24a.html');
    addresses.push('http://student.mit.edu/catalog/m24b.html');
    addresses.push('http://student.mit.edu/catalog/mCCa.html');
    addresses.push('http://student.mit.edu/catalog/mCSBa.html');
    addresses.push('http://student.mit.edu/catalog/mECa.html');
    addresses.push('http://student.mit.edu/catalog/mEMa.html');
    addresses.push('http://student.mit.edu/catalog/mESa.html');
    addresses.push('http://student.mit.edu/catalog/mHSTa.html');
    addresses.push('http://student.mit.edu/catalog/mIDSa.html');
    addresses.push('http://student.mit.edu/catalog/mSCMa.html');
    addresses.push('http://student.mit.edu/catalog/mASa.html');
    addresses.push('http://student.mit.edu/catalog/mMSa.html');
    addresses.push('http://student.mit.edu/catalog/mNSa.html');
    addresses.push('http://student.mit.edu/catalog/mSTSa.html');
    addresses.push('http://student.mit.edu/catalog/mSPa.html');

    console.log(addresses);
    return addresses;

    // how do i direct a command to gitbash?
};

exercise.two = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Download every course catalog page.
    //
    //  You can use the NPM package "request".
    //  Or curl with the NPM package shelljs.
    //
    //  Save every page to "your_folder/catalog"
    //
    //  See homework guide document for more info.
    // -----------------------------------------------

    var addresses = exercise.one();

    addresses.forEach(function(url,i){
        var res = request('GET', url);
        var filename = __dirname+'/catalog/' + i + '.html';
        fs.writeFileSync(filename, res.getBody().toString());
    });
};

exercise.three = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Combine all files into one,
    //  save to "your_folder/catalog/catalog.txt"
    //
    //  You can use the file system API,
    //  https://nodejs.org/api/fs.html
    //
    //  See homework guide document for more info.
    // -----------------------------------------------

    var fs = require('fs');

    for (i=0; i<=72; i++){
        console.log(i);
        var textContent = fs.readFileSync(__dirname+'/catalog/'+i+'.html').toString();
        
        console.log(textContent);
        
        fs.appendFileSync(__dirname+'/catalog/catalog.txt', textContent, function (err) {
          if (err) {
            return console.log(err)
          }
        })
    };

}

exercise.four = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Remove line breaks and whitespaces
    //  from the file. Return a string of
    //  scrubbed HTML. In other words, HTML without
    //  line breaks or whitespaces.
    //
    //  You can use the NPM package "html-minifier".
    //
    //  See homework guide document for more info.
    // -----------------------------------------------

    var minify = require('html-minifier').minify;
    var data = fs.readFileSync(__dirname + '/catalog/catalog.txt');

    var scrubbed = minify(data.toString(),{
        collapseWhitespace: true,
        minifyJS : true,
        minifyCSS : true
    });
    // we remove white space and line breaks 

    var clean = scrubbed.replace(/'/g,'');
    fs.writeFileSync('./catalog/clean.txt', clean);

    // this removes intermediate single quotes, which causes the string to break

};


exercise.five = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Load your scrubbed HTML into the DOM.
    //  Use the DOM structure to get all the courses.
    //
    //  Return an array of courses.
    //
    //  You can use the NPM package "cheerio".
    //
    //  See homework guide document for more info.
    // -----------------------------------------------

    var data = fs.readFileSync(__dirname + '/catalog/clean.txt');
    var $ = cheerio.load(data)
    // This uses cheerio to convert it into a structure compatible with cheerio

    var courselist = []
    $('h3').each(function(i,element){
        courselist.push($(element).text());
    });

    // we set up an array, the look for course titles in the clean file
    // ??? the course title are inside the h3

    console.log('After 5');
    console.log(courselist);

    return courselist;
};

// exercise.six = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Return an array of course titles.
    //
    //  You can use the NPM package cheerio.
    //
    //  See homework guide document for more info.
    // -----------------------------------------------
    
    // This exercise is unnecessary since exercise five has already sieve out the course name?
//};

exercise.seven = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Filter out punctuation, numbers,
    //  and common words like "and", "the", "a", etc.
    //
    //  Return clean array.
    //
    //  See homework guide document for more info.
    // -----------------------------------------------

    var courselist = exercise.five();

    var words = courselist.map(function(title){
        return title.toLowerCase().match(/([a-z]+)/g);
    });

    // This reduces everything to lower cases and then remove numbers and punctuations

    // I choose to remove common words in exercise 8, when all words are lined up in an array

    console.log('After 7');
    console.log(words);

    return words;
};

exercise.eight = function(){
    // -----------------------------------------------
    //  YOUR CODE
    //
    //  Make an array of words from the titles.
    //
    //  Return array of words.
    //
    //  See homework guide document for more info.
    // -----------------------------------------------

    var words = exercise.seven();
    var wordsFlat = words.reduce(function(previous,current){
        return previous.concat(current);

        // this "reduces" every word into a single array
    },[]);

    var common_words=[
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        'on','with','the','and','in','a','an', 'by', 'to', 'how', 'it', 'are', 'to', 'for', 'of'];

    for (i=0;i<wordsFlat.length;i++){
        for (j=0;j<common_words.length;j++){
            if (wordsFlat[i] == common_words[j]){
                console.log('spliced ' + wordsFlat[i])
                wordsFlat.splice(i,1);
            };
        };
    };

    // this removes common words

    console.log('After 8');
    console.log(wordsFlat);

    return wordsFlat;
};

exercise.nine = function(){
    // -----------------------------------------------
    //   YOUR CODE
    //
    //  Count the word frequency.
    //
    //  Return a word count array.
    //
    //  See homework guide document for more info.
    // -----------------------------------------------

    var wordsFlat = exercise.eight();

    var scores = wordsFlat.reduce(function(previous, current){
        if (current in previous){
            previous[current] +=1;    
        }
        else{
            previous[current] = 1;
        }
        return previous;
    },{});

    console.log('After 9');
    console.log(scores);
        
    fs.writeFileSync('./catalogSample/catalog_data.js', 'var scores =' + JSON.stringify(scores));

    return scores;
};

module.exports = exercise;