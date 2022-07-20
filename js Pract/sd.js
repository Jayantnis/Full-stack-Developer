let s = [-9, -2, 0, 2, 3];
let sors = [];
for (let sq = 0; sq < s.length; sq++) {
    sors = Math.pow(s[sq], 2);
}
// console.log(sors)

let de = sors.sort(function(a, b) { return a - b; });
console.log(de)

// console.log(de);
// let In = newArr;
// console.log(Math.pow(numbers, 2))

// for (let d = 0; d < numbers.length; d++) {
//     if (In[d] > In[d + 1]) {
//         console.log(In[d])
//     }
// }
// let sorted = x.sort();
// let new_sorted_array = [];
// // console.log(sorted);
// for (let d = 0; d < x.length; d++) {
//     result = Math.pow(sorted[d], 2);
//     // console.log(sorted);
//     new_sorted_array[result];
// }
// // let squre = result
// // console.log(result.sort())
// console.log(new_sorted_array[2]);