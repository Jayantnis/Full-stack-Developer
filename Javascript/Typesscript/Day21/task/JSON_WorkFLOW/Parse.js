//create object
const person = {
    firstName: "Jay",
    lastName: "Nis",
    age: 32,
    eyeColor: "sky"
};

// Store data
mejson = JSON.stringify(person);
// console.log(mejson);
localStorage.setItem("connect", mejson);

// covert json into js obj Retrieving data:
text = localStorage.getItem("connect");
obj = JSON.parse(text);
console.log("JSON  convert to obj format");
console.log(obj);



console.log("Obj convert to TextFormat");
obj = JSON.stringify(person)
console.log("TEXT FORMAT" + obj) //any data as text formate