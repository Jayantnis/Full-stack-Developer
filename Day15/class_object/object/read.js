const person = {
    FirstName: "jayant",
    LastName: "Nishad",
    age: 50,
    eyecolor: "brown",

    fullname: function() {
        return "\nfunction access\n" + this.FirstName + " " + this.age;
    }

};

console.log(person.FirstName +
    " " + person["LastName"] + " " + person.fullname())