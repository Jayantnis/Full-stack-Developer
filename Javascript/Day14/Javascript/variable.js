// cannot start with no. older js
// case type
// 1 camelCase
// 2 PascalCase
// 3 kebab-case
// 4 snake_case

// var a;
// console.log('The value of a is ' + a); // The value of a is undefined

// console.log('The value of b is ' + b); // The value of b is undefined
// var b;
// // This one may puzzle you until you read 'Variable hoisting' below

// console.log('The value of c is ' + c); // Uncaught ReferenceError: c is not defined

// let x;
// console.log('The value of x is ' + x); // The value of x is undefined


// console.log('The value of y is ' + y); // Uncaught ReferenceError: y is not defined
// let y;

// var input;
// if (input === undefined) {
//     doThis();
// } else {
//     doThat();
// }

// ~~Var
var city = 'My name is jayant';
city = "go to home"
console.log(city);
//equal to var

// ~~~const same
// const city = 'My name is jayant';
// city = "go to home"
// console.log(city);

// block level scope
{
    //let create to local variable
    //   not global change but
    // clean code
    let city = 'Rampur';
    city = 'kolkata';
    console.log(city);

}
console.log(city);


const ar1 = [12, 23, 12, 53];
// can't re-declaration
// ar1 = [12, 23, 12];
// ar1.push(34);
console.log(ar1);


//global scope 
// {
//     a = 5;
// }
// console.log(a);

{
    let a = 35;
    // console.log(a);
}
// console.log(a);

// variable scado
function test() {
    let a = "hello";
    var b = "bye";
    // ileagy
    if (true) {
        let a = "Hi";
        var b = "Goodbye";
        console.log(a);

        console.log(b);
    }
    console.log(a);

    console.log(b);
}
test();

// var ab; No error
// var ab;

// let a;//error
// let a;

// const a;//error
// const a;

// Declaration
// var a
// let a
// const a; //error


//Re-installization
// var a = 3; // var yes
// a = 34;

// let a = 34; //let yes
// a = 43;

// const a = 4;//const error 
// a = 34;

//hositing how to js execution work's
// console.log(d);
// let d = 2; //undefiend

// let co;
// console.log(co); //error
// co = 23;
// var cond = 53;

// function as() {
//     console.log(a);
//     var a = 10;
// }
// as();


// function as() {
//     console.log(a, b, c);
//     const c = 30;
//     let b = 34;
//     var a = 10;
// }
// as();