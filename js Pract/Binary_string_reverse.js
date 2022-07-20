let s = "11000";

// console.log(s.substring(1, 4));
let readsave = s.substring(1, 4);
let save_string = [];
for (let wt = readsave.length; wt >= 0; wt--) {
    save_string = readsave.charAt(wt);
}
console.log(save_string.charAt(1))