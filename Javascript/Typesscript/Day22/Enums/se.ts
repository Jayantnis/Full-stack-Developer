/*
    An enum is a special "class" that represents  a group of constants(unchangeble variables).
    Enums come in two flavors string and numeric 
*/ 
enum createDirectional
{
    North=1, //start 1 or 0 
    East,
    South,
    west
}
 let currentdirectiom=createDirectional.west;
 console.log(currentdirectiom);


// fully Initialized 
 enum statusCodeP
 {
    Notfound =340,
    suce=34,
    accepted=324,
    BadRequest=3444
 }

 console.log(statusCodeP.Notfound);