const string = "Hello Deepak Sarwa this is dotnet"; //"This is string";
//case 1
// let x = new set();
//string count functions
// for (let k = 0; k < string.length; k++) {
//     var count_string = 0;
//     for (let i = 0; i < string.length; i++) {

//         if (string.charAt(i) == string.charAt(k)) {
//             // console.log(s[i]);
//             count_string = count_string + 1;
//         }

//     }
//     // if(string.charAt())
//     console.log(string.charAt(k) + " " + count_string)
// t 2
// h 1
// i 3
// s 3
//   2
// i 3
// s 3
//   2
// s 3
// t 2
// r 1
// i 3
// n 1
// g 1
// }

// case 2
// hash set adding functions 
const storeData = new Set();
const mapadd = new Map();
for (let k = 0; k < string.length; k++) {
    var count_string = 0;

    for (let i = 0; i < string.length; i++) {

        if (string.charAt(i) == string.charAt(k)) {
            // console.log(s[i]);
            count_string = count_string + 1;
        }

    }

    if (string.charAt(k) != " ") //removing space  if include than remvoe if
    {
        // console.log(string.charAt(k) + " " + count_string)
        // storeData.add(string.charAt(k));
        mapadd.set(string.charAt(k), count_string);
        // storeData.add(string.charAt(k));
    }
}

// for (let x = 0; x < mapadd.size; x++) {
//     console.log(mapadd.get(3));
// }
let text = "";
mapadd.forEach(function(value, key) {
    text += key + ' = ' + value + '\n';
})
console.log(text)
    // let obj create in set
    // var itr = storeData.values();
    // // var reds = reduce.values();
    // // console.log(reduce.values())
    // for (x = 0; x < storeData.size; x++) {
    //     console.log(itr.next().value + " " + mapadd);

// }
// console.log(mapadd.get("H"))
// console.log(text)
// const storeData = new Set();
// for (let k = 0; k < string.length; k++) {
//     var count_string = 0;
//     for (let i = 0; i < string.length; i++) {

//         if (string.charAt(i) == string.charAt(k)) {
//             // console.log(s[i]);
//             count_string = count_string + 1;
//         }

//     }

//     if (string.charAt(k) != " ") //removing space  if include than remvoe if
//     {
//         console.log(string.charAt(k) + " " + count_string)
//             // storeData.add()
//     }
// }