// class student {
//     // properties or assign theocnstructor
//     constructor(name, age, classs) {
//             this.named = name;
//             this.ages = age;
//             this.myclas = classs;
//         }
//         // instance orp prototype
//     biodata() {
//         return `hii i am ${this.named}. my age ${this.ages}. Create class ${this.myclas} method`
//     }
// }

// class player extends student {
//     constructor(named, ages, myclass, game) {
//         super(named, ages, myclass);
//         this.games = game;
//     }
//     player_biodata() {
//         return `${super.biodata()} . I am player of ${this.games}`;
//     }

// }
// let obj1 = new player("jayant", 34, 'MCD', "football");
// // let obj2 = new player("football");

// // let obj2 = new player("jayt", 43, 'MCS');
// console.log(obj1.player_biodata())
//     // obj2.biodata();



// var car = {
//     onfovali: 4,
//     modal: "yahu",
//     year: 2019,
//     repair: [{
//             id: [{
//                 name: "jay",
//                 place: ["raipur", "Tulshi"]
//             }],
//             time: "fd"
//         },
//         {
//             id: 2,
//             time: "read"
//         }
//     ]
// };

// console.log(car.repair[0].id[0].place[1]);

let a = [3, 1, 4, 6, 7, 8];

const s = a.map(a => a * 2);
console.log(s);