let messages: string = 'Hello World';
console.log(messages);
// type annotation in typescript
var ag: number = 32; // number variable
var na: string = "jay";// string variable
var date: boolean = true;// Boolean variable

// type Annotation of parameters
function display(id:number, name:string)
{
    console.log("Id = " + id + ", Name = " + name);
}

function ds(id:number,name:string)
{
    console.log("Id = "+id+",Name = "+name);
}

// object annotation
var employee : { 
    id: number; 
    name: string; 
}; 

employee = { 
  id: 100, 
  name : "John"
}