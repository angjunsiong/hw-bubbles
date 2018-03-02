var data = "My name is <b>Bo</b>, I'm <b>18</b> years old, I like <b>code</b>.";
var expression = /<b>(.*?)<\/b>/g;

// This matches a certain regular pattern, in this case this has picked out every thing that is between the bold
// not much emphasis here

var matches = data.match(expression);
console.log(matches);