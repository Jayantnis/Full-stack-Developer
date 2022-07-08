//error let key
let num1:number=1;

function letdecaration(){
    let num2:number=2;

    if(num2>num1)
    {
        let num3:number=3;
        num3++;
    }

    while(num1<num2)
    {
        let num4:number=4;
        num4++;

    }
        console.log(num1);
        console.log(num2);
        // console.log(num3); //Compiler Error: Cannot find name 'num3'
        // console.log(num4); //Compiler Error: Cannot find name 'num4'
}
letdecaration();
let employeeNamer = "DJohn";
// or 
let employeeNam6e:string = "RJohn";



// var running all 
// var num1:number = 1; 
    
// function varDeclaration() { 
//     var num2:number = 2; 

//     if (num2 > num1) { 
//         var num3: number = 3;
//         num3++; 
//     } 

//     while(num1 < num2) { 
//         var num4: number = 4;
//         num1++;
//     }

//     console.log(num1); //2
//     console.log(num2); //2 
//     console.log(num3); //4
//     console.log(num4); //4
// }

// varDeclaration();