//the `: number `
function Re():number{
    return new Date().getTime();
}
console.log(Re())

// void return types
// the type void can be used to indicate a functions doesn't return any value
function printd():void
{
    console.log('Hello !');
}
function mutiply(a:number,b: number)
{
    return a+b;
}
console.log(mutiply(4,3))


// optional Parameters
// default typescipt will assume all parameters
function as(a:number,b:number,c?:number)
{
    return a+b+(c||0);
}
console.log(as(3,5));

// default Parameters
// parametere with default values ,the default values goes after the type anotation
function pow(value:number,expo:number=10)
{
    return value**expo;
}
console.log(pow(34,10));

// named Parameters
// same pattern as typing normal parameters
function divides({dividend,divisor}:{dividend:number,divisor:number})
{
    return dividend/divisor;
}

// Rest Parameters 
// Rest parameter can be typed like normal parameters ,but the 
// types must be an array as rest parameters are always arrays
function add(a:number,b:number,rest: number[])
{
    return a+b+rest.reduce((p,c)=>p+c,0);
}
// console.log(add(10,10,10,10,10));