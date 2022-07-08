// union -> OR 
/*
    union types are used when a value can be  more than a single types 
    property -> string  or numberse
*/

function printStatuCode(code: string | number)
{
        console.log(`my status code is ${code}.`);
}

printStatuCode("rahul");
printStatuCode(784);
//new line calling two posibilitie's


//that is union type Errors 
// You need to know what your type is when union types are being  used to
// avoid types errors
function   printStatus(code: string | number)
{
    console.log(`my status  code is`);
    // Property 'toUpperCase'
}