function foo(outer_arg) {

    function inner(inner_arg) {
        return outer_arg + inner_arg;
    }
    return inner;
}
var get_func_inner = foo(5);

console.log(get_func_inner(4));
console.log(get_func_inner(3));


// anonymous
// Outer function
function outer() {
    var arr = [];
    var i;
    for (i = 0; i < 4; i++) {
        // storing anonymous function
        arr[i] = function() { return i; }
    }

    // returning the array.
    return arr;
}

var get_arr = outer();

console.log(get_arr[0]());
console.log(get_arr[1]());
console.log(get_arr[2]());
console.log(get_arr[3]());