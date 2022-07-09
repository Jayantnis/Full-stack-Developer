class Person {
  name: string;

  public constructor(name:string){
    this.name=name;
  }
  public getN():string{
    return this.name;
  }
}
// class re extends Person{
//     private height:string="23";
//     public add_h(heights:string)
//     {
//         this.height=heights;
//         console.log(heights);
//     }
// }
const person = new Person("Inc.");
person.name = "Jane";

console.log(person);
console.log(person.getN());
// const s=new re()
console.log();