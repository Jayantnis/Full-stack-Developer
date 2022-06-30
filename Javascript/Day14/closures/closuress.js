// closure
/* 1 */
function foo()
/* 2 */
{
    /* 3 */
    var b = 1;
    /* 4 */
    function inner() {
        /* 5 */
        return b;
        /* 6 */
    }
    /* 7 */
    return inner;
    /* 8 */
}
/* 9 */
var get_func_inner = foo();
console.dir(get_func_inner);
/* 10 */
console.log(get_func_inner());
/* 11 */
console.log(get_func_inner());
/* 12 */
console.log(get_func_inner());