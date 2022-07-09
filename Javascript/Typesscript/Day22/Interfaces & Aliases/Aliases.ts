// ts allows types to be defined separately from the variable that use them 
/*
Aliases and Interfaces allows types to be easily shared betwen different variable / object
*/

// type Aliases
type cary=number;
type Car={
    style:cary;
}

const caaas:cary=43;
const cars:Car = {
    style:caaas
};
console.log(cars);

interface length{
    left:number,
    right:number
}

interface squre{
    sidelength:number,
    digonal:length
}

/*--------Interface-------*/
interface Rect{
    rer:number,
    eres:number,
    num:number[],
    Box:squre[];

} 

const recti:Rect={
    rer:20,
    eres:67,
    num:[34,43],
    // ,{sidelength:23,digonal:65}
    Box:[{sidelength:34,digonal:{left:34,right:43}}]
    
}

const t:{left:number,right:number}={left:2,right:3}
let y:length=t;
function re(res:length){
    console.log(res)
}
re(t);
// console.log(recti.Box[1].digonal)
console.log(recti.Box[0].digonal.right)
// // extending files 
// interface Rects{
//     g:number;
// }

// interface cde extends Rects{
//     read:string;
// }

// const cde:cde={
//     g:34,
//     read:"Sdf"
// }
// console.log(cde);00