const s = "Set values"
    // unique values add , and each value can only occure once in a set can  hold any value of any datatype
console.log(s);
let x = new Set();
x.add(3);
x.add(4);
x.add(3);
x.add(5);
console.log(x);
// delete() -> remove an element from a set 
x.delete(3); //data equal
console.log(x);

// forEach()
const letter = new Set(["a", "a", "b", "c"]);

let text = "";

letter.forEach((x) => {
    text += x + " ";
})
console.log(text);
// how to has
if (letter.has() == 'ed') {
    console.log(letter)
}

console.log(letter.values());

// entries() Return an Iterator with the [value,value] pairs from a set

const l = letter.entries();
let te = "";
for (const entry of l) {
    te += entry + " ";
}
console.log(te);


console.log(typeof letter);
console.log(typeof text);
console.log(typeof x);
console.log(typeof l); //return object
console.log(letter instanceof Set); //return ture/false