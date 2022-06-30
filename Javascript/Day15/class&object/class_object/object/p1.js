var a = {
    firstname: "Ram",
    lastname: "GO",
    age: 32,
    favmovie: ['dh', 'sd', 'rea'],
    salary: function() {
        return 2500;
    },
    fullname: function() {
        return this.firstname + " " + this.lastname;
    },
    living: {

        'Address': 'gudhiyari',
        'village': 'INDIA'
    }
};
console.log(a);
document.write(a.firstname +
    " " + a.lastname);
document.write(a.color = "blue" + " " + a.color);
document.write(a.favmovie[2])

document.write(a.salary())
document.write(a.fullname())
document.write(a.living.Address)