
// Tuple array : 
let outTuple:[number,boolean,string];
outTuple=[5,false,'Coding structure is good'];
// initialize incoorrectly throws an error
// outTuple=['Coding structure is good',false,5];
console.log(outTuple);
// can add index push -> something new and wrong 
outTuple.push('something new and wrong');
console.log(outTuple[2]);


// define randonly tuple 
const ourReadonlyTuple:readonly[number,boolean,string]=[5,true,'the Real coding god '];

// throws error  as it is readonly
// ourReadonlyTuple.push('Coding god took ');
console.log(ourReadonlyTuple);

// now Named Tuples: allow us  to provide content for our values at each index
const graph:[x:number,yet:number]=[456,564];
console.log(graph);

// Destructuring Tuples 
const gr :[number,string,true,boolean]=[324,"hello sir ",true,false]
console.log(gr);