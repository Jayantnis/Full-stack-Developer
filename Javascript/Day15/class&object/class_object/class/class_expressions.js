class std {
    constructor(h, r) {
        console.log(h + "Hello" + r);
    }
    super() {
        console.log("her");
    }

    static d() {
        console.log("this is static")
    }
}

let studed = new std("RAHUL ", 3245); //arguments
studed.super();
std.d();
// console.log(studed)