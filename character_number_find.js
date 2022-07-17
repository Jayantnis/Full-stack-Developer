const string = "Hello Deepak Sarwa this is dotnet"; //"This is string";
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
        mapadd.set(string.charAt(k), count_string);
    }
}

let text = "";
mapadd.forEach(function(value, key) {
    text += key + ' - ' + value + '\n';
})
console.log(text)