var a = 7;
// let counter = 0;

// function incrementCounter(counter) {
//     counter++;
// }

// incrementCounter();

// incrementCounter();
// incrementCounter();
// console.log(counter);


let counter = creaCounter();
let counter1 = creaCounter();

function creaCounter() {
    return {
        count: 0,
        increment: function() {
            this.count++;
        }
    }
}

counter.increment();