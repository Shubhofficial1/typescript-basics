function Square(num: number) {
  return num * num;
}

Square(2);

function Greet(name: String) {
  return `Hello There , ${name}`;
}

Greet("Shubham");

// Arrow functions

const doSomething = (person: String, age: number, isAdmin: Boolean) => {};
doSomething("Shubham", 24, true);

// Default Parameters

function SquareArea(length: number = 10, breadth: number = 20) {
  return length * breadth;
}
console.log(SquareArea(10));
console.log(SquareArea(10, 30));
console.log(SquareArea(5));

// Return Type Annotations

function SquareAreaNew(length: number = 10, breadth: number = 20): number {
  return length * breadth;
}

function Random(num: number): number | string {
  if (Math.random() > 0.5) {
    return num.toString();
  }
  return num;
}

const add = (x: number, y: number): number => {
  return x + y;
};
