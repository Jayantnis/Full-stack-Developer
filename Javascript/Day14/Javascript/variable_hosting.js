// variable hosting
// first case
// var a = 10;
// document.write("<h1><br>" + a);


/* Implement case: 1 in js compiler's

    var a; //declarations and hosting to top

    var a=10;

    result = 10

    But case: 2

    */

var i = "Hello js";

document.write("<br>" + i + "<br>");

i = "Jayant";

function show() {
    document.write(i + "<br>");
}
show();

// Second case
var a = 10;
document.write("<h1><br>" + a + " " + b);
var b = 10;

document.write("<h1><br>" + a + " " + b);

/* Implement case: 3 in js compiler's

    var a; //declarations and hosting to top
    var b;

     a=10;
    document.write("<h1><br>" + a + " " + b);
     b = 10;
    B-> not define
    result = 10 undefine

     a=10;
     b = 10;

     document.write("<h1><br>" + a + " " + b);
    result = 10 10
  
    */

var i = "Hello js";

document.write("<br>" + i + "<br>");

function show() {
    // var i = "GFG";

    document.write(i + "<br>");
    var i = "GFG";

}
show();

/*
 
var i;
 i = "Hello js";

document.write("<br>" + i + "<br>");

function show() {
    document.write(i + "<br>");
 i = "GFG";
    
}
show();
*/

var a = 5;

function getn() {
    console.log("Technical Jay")
}
console.log(getn)
console.log(a)