/*
    object of syntax => Typescript
*/ 
const car:{type:string,model:string,year:number}={
    type:"Toyota",
    model:"Corolla",
    year:2009
};

// ALL Properties ::

// 1)Type => type 
// Inference 
// TypeScript can infer (type)
const phone={
    type:"SD888",
};
phone.type="MTK_hello_G88";//no error
// phone.type=2;//error this line 
console.log(phone)

/* 2) Optional => ? */
const  ca:{type:string,milege?:number}={
type:"Toyota",
// milege:334
};
ca.milege=234;
console.log(ca)


// index Signatures -> is can be used for object without a defined list of [properties]
const nameAgmap:{[index:string]:number}={};
nameAgmap.jack=432;
console.log(nameAgmap);
