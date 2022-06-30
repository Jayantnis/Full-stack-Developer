// Single line of code
//f the function has only one statement, 
//and the statement returns a value,
// you can remove the brackets and the return keyword:
let add = (a, b) => a + b;

console.log(add(3, 2));

// Multiple line of code
const great = (a, b) => function e() {
    if (a > b)
        return "a is greater";
    else
        return "b is greater";
}

console.log(great(3, 5));

//
// function greeting(name) {
//     alert('Hello ' + name);
// }

// function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
// }

// processUserInput(greeting);