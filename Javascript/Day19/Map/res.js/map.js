const fruits = new Map([
    ["apple", 200],
    ["bananas", 300],
    ["oranges", 345]
]);

fruits.set("s", 400);

fruits.get("apple");
console.log(fruits)

// Clear the Map
fruits.clear();
console.log(fruits);

// Delete an Element
fruits.delete("apples");

console.log(fruits);