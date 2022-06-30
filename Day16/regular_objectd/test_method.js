// let text = "The best thing in life are free!";

// const patter = patter.test(text);
// console.log(patter);

var str = "Javascrpt is an interesting  scripting lang";
var re = new RegExp("script", "g");

var result = re.toSource(str);
console.log(result)