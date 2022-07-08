let first:number = 123; // number 
let second: number = 0x37CF;  // hexadecimal 
let third:number=0o377 ;      // octal
let fourth: number = 0b111001;// binary  

console.log(first);  // 123 
console.log(second); // 14287
console.log(third);  // 255
console.log(fourth); // 57 

let employeeName:string = "John Smith"; 
let employeeDept:string = "Finance"; 

// Pre-ES6 
let employeeDesc1: string = employeeName + " works in the " + employeeDept + " department."; 

// Post-ES6 
let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department.`; 

console.log(employeeDesc1);//John Smith works in the Finance department. 
console.log(employeeDesc2);//John Smith works in the Finance department. 



// let employeeName:string = "John Smith"; 
// let employeeDept:string = "Finance"; 

// // Pre-ES6 
// let employeeDesc1: string = employeeName + " works in the " + employeeDept + " department."; 

// // Post-ES6 
// let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department.`; 

// console.log(employeeDesc1);//John Smith works in the Finance department. 
// console.log(employeeDesc2);//John Smith works in the Finance department. 


let fruits: Array<string>;
fruits = ['Apple', 'Orange', 'Banana']; 

let ids: Array<number>;
ids = [23, 34, 100, 124, 44]; 



//declaration type as multi type of array
let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 
// or 
let valuesd: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 


var empId: number = 1;
var empName: string = "Steve";        

// Tuple type variable 
var employe: [number, string] = [1, "Steve"];