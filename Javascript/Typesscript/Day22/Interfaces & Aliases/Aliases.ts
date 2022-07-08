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
const car:Car = {
    style:caaas
};
console.log(car);


/*--------Interface-------*/
interface Rect{
    rer:number,
    eres:number
} 

const recti:Rect={
    rer:20,
    eres:67
}
console.log(recti)

// extending files 
interface Rects{
    g:number;
}

interface cde extends Rects{
    read:string;
}

const cde:cde={
    g:34,
    read:"Sdf"
}
console.log(cde);