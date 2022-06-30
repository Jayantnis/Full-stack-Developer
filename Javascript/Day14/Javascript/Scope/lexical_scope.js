// function init() {
//     var name = 'jayant'; // name is a local variable created by init
//     function displayName() { // displayName() is the inner function, a closure
//         alert(name); // use variable declared in the parent function
//     }
//     displayName();
// }
// init();
// console.log(name);ṇṇṇ

//closure

function makefn() {
    var name = 'jaynt'

    function displayName() {
        alert(name);
    }
    return displayName;
}
var f = makefn();
f();

function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); //


// practical  font sizing
function makeSizer(size) {
    return function() {
        document.body.style.fontSize = size + 'px';
    };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);