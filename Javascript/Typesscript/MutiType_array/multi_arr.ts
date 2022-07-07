// let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 'banana', 4];

// console.log(values)
var employee: [number, string][];
employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];

console.log(employee);

const enum EDirection {
    Up,
    Down,
    Left,
    Right,
  }
  
  const ODirection = 
  {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
  } as const;
  
  EDirection.Up;
  //         ^?
  
  ODirection.Up;
  //         ^?
  
  // Using the enum as a parameter
  function walk(dir: EDirection) {}
  
  // It requires an extra line to pull out the values
  type Direction = typeof ODirection[keyof typeof ODirection];
  function run(dir: Direction) {}
  
  walk(EDirection.Left);
  run(ODirection.Right);