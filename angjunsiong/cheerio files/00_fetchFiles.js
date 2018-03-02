var urls = [];
urls.push('http://student.mit.edu/catalog/m1a.html');
urls.push('http://student.mit.edu/catalog/m1b.html,
urls.push('http://student.mit.edu/catalog/m1c.html,
urls.push('http://student.mit.edu/catalog/m2a.html,
urls.push('        http://student.mit.edu/catalog/m2b.html,
urls.push('        http://student.mit.edu/catalog/m2c.html,
urls.push('        http://student.mit.edu/catalog/m3a.html,
        http://student.mit.edu/catalog/m3b.html,
        http://student.mit.edu/catalog/m4a.html,
        http://student.mit.edu/catalog/m4b.html,
        http://student.mit.edu/catalog/m4c.html,
        http://student.mit.edu/catalog/m4d.html,
        http://student.mit.edu/catalog/m4e.html,
        http://student.mit.edu/catalog/m4f.html,
        http://student.mit.edu/catalog/m4g.html,
        http://student.mit.edu/catalog/m5a.html,
        http://student.mit.edu/catalog/m5b.html,
        http://student.mit.edu/catalog/m6a.html,
        http://student.mit.edu/catalog/m6b.html,
        http://student.mit.edu/catalog/m6c.html,
        http://student.mit.edu/catalog/m7a.html,
        http://student.mit.edu/catalog/m8a.html,
        http://student.mit.edu/catalog/m8b.html,
        http://student.mit.edu/catalog/m9a.html,
        http://student.mit.edu/catalog/m9b.html,
        http://student.mit.edu/catalog/m10a.html,
        http://student.mit.edu/catalog/m10b.html,
        http://student.mit.edu/catalog/m11a.html,
        http://student.mit.edu/catalog/m11b.html,
        http://student.mit.edu/catalog/m11c.html,
        http://student.mit.edu/catalog/m12a.html,
        http://student.mit.edu/catalog/m12b.html,
        http://student.mit.edu/catalog/m12c.html,
        http://student.mit.edu/catalog/m14a.html,
        http://student.mit.edu/catalog/m14b.html,
        http://student.mit.edu/catalog/m15a.html,
        http://student.mit.edu/catalog/m15b.html,
        http://student.mit.edu/catalog/m15c.html,
        http://student.mit.edu/catalog/m16a.html,
        http://student.mit.edu/catalog/m16b.html,
        http://student.mit.edu/catalog/m17a.html,
        http://student.mit.edu/catalog/m17b.html,
        http://student.mit.edu/catalog/m18a.html,
        http://student.mit.edu/catalog/m18b.html,
        http://student.mit.edu/catalog/m20a.html,
        http://student.mit.edu/catalog/m21a.html,
        http://student.mit.edu/catalog/m21Aa.html,
        http://student.mit.edu/catalog/mCMSa.html,
        http://student.mit.edu/catalog/m21Wa.html,
        http://student.mit.edu/catalog/m21Ga.html,
        http://student.mit.edu/catalog/m21Ha.html,
        http://student.mit.edu/catalog/m21Hb.html,
        http://student.mit.edu/catalog/m21La.html,
        http://student.mit.edu/catalog/m21Ma.html,
        http://student.mit.edu/catalog/mWGSa.html,
        http://student.mit.edu/catalog/m22a.html,
        http://student.mit.edu/catalog/m22b.html,
        http://student.mit.edu/catalog/m22c.html,
        http://student.mit.edu/catalog/m24a.html,
        http://student.mit.edu/catalog/m24b.html,
        http://student.mit.edu/catalog/mCCa.html,
        http://student.mit.edu/catalog/mCSBa.html,
        http://student.mit.edu/catalog/mECa.html,
        http://student.mit.edu/catalog/mEMa.html,
        http://student.mit.edu/catalog/mESa.html,
        http://student.mit.edu/catalog/mHSTa.html,
        http://student.mit.edu/catalog/mIDSa.html,
        http://student.mit.edu/catalog/mSCMa.html,
        http://student.mit.edu/catalog/mASa.html,
        http://student.mit.edu/catalog/mMSa.html,
        http://student.mit.edu/catalog/mNSa.html,
        http://student.mit.edu/catalog/mSTSa.html,
        http://student.mit.edu/catalog/mSPa.html


var fetch = require('node-fetch');
var fs = require('fs');

const writeFile = (path, data, opts = 'utf8') =>
    new Promise((res, rej) => {
        fs.writeFile(path, data, opts, (err) => {
            if (err) rej(err)
            else res()
    })
})

var makeRequest = async function (url,counter) {
    var res = await fetch(url);
    await writeFile('data/' + counter + '.html', await res.text());
    return 'done - ' + counter;        
};  

urls.forEach(function(url,i){
    makeRequest(url,i).then((result) =>{
        console.log(result);
    });    
})