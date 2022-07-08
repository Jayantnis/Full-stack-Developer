function createPairs<S,T>(v1:S,v2:T):[S,T]{
return [v1,v2];
}
console.log(createPairs<string,number>('hello',42));


let x: unknown = 'hello';
console.log((<string>x).length);

let s = 'hellodfs';
console.log(((s as unknown) as number));

//Default value 
// Generic  can be assigned default values which apply if no 
// if no other value is specified or inferred
class nameValue<T=string>
{
    private _value:T|undefined;
    
    constructor(private name:string){}

    public setValue(value:T)//generic varaiable
    {
        this._value=value;
    }

    //get value 
    public getValue():T|undefined
    {
        return this._value;
    }
    // set value 
    public tostring(): string{
        return `${this.name}:${this._value}`;
    }
}

let values=new nameValue('myNumber');
values.setValue('myValue');
console.log(values.tostring);


// Extends 
function createlogged<S extends string | number ,T extends string | number>(v1:S,v2:T):[S,T]{
    console.log(`creating pair : v1=${v1} , v2=${v2}`);
    return [v1,v2];
}

console.log("updating set",51);