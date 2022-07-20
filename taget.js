let arr = [3, 1, 1, 2, 5, 1, 1];
let target = 9;
let sum = [];
let size = arr.length;
// console.log(size)
let x = arr.length - 1;
let re = '';
let co = 0;
while (x > 0) {
    co = co + 1;
    re = arr[x] + arr[x - 1];
    // console.log(re)/
    if (re == target) {
        // console.log(co)
        console.log(co)

    }
    x--;
}