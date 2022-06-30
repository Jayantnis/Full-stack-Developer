console.log("this key word access")

// let person = {
//     firstName: 'jayant',
//     sayhello() {
//         console.log("Hello ! i am " + this.firstName + ".i have a" + bick.brand + " bick")
//     }
// };

// let bick = {
//     brand: 'pln',
//     model: 'safari'
// };

// person.sayhello();

function per(first, last) {
    this.firstName = first;
    this.lastname = last;

}
// add prototype at add new property
per.prototype.age = 32;
const myfat = new per("Jay", "say's");
console.log("Age Prototype " + myfat.age);


let regex = new RegExp('[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}');

let checkgmail = ["asdf@.com", "jayantnDDsdf@cds.dfes", "erssds@dddddd.o"];

checkgmail.forEach((address) => {
        console.log(regex.test(address))
    })
    /*
    ^ beginning of the line of data
    (?: ) non-caputring group
    \ forward slash ,or decimal point in capturing()
    three digits \d{3} , \d{4}
    match remembered in the (first) captured group \1
    end line of data $
    '/^(?:)\d{3}|\(\d{3}\)(-\/\.)\d{3}\1\d{4}$/'
    */
let phoneRegex = new RegExp('^[1-9]\d{2}-\d{3}-\d{4}')
let phone_numb = [345324454, 97 - 656 - 3434];

console.log("Phone number check")
phone_numb.forEach((checknum) => {
    console.log(phoneRegex.test(checknum));
})