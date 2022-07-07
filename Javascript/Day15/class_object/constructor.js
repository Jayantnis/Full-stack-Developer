'use strict';
class stduent {

    constructor(name, age, ID, element) {

            this.stuID = ID;
            this.rolln = element;
            this.std_age1D = age;
            console.log("Constructor function access")
            console.log("Name " + name + "\n" + "Age " + age + "\nElement ID " + +10);

        }
        //prototype method
    studinfo() {
        console.log("Student ID : " + this.stuID);
        console.log("Rollno. : " + this.rolln);
    }

    std_age() {
        console.log("Age : " + this.std_age1D);
    }

    static static_fun() {
        console.log("Student Information completed ")
    }
}

let student_info = new stduent("JACK", 34, 3022343009, 22014005); //argument
student_info.studinfo();
student_info.std_age();


let student_info1 = new stduent("Rahul", 33, 3022343008, 22014343); //argument
student_info1.studinfo();
student_info1.std_age();

// not create onject to calling
// static only call in main class name and static function name calling 
stduent.static_fun();