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

// Anonymous functions

const colors = ["green", "yellow", "red"];

colors.forEach((color: string) => {
  return color.toUpperCase();
});

// Void Return types

const annoyUser = (num: number): void => {
  for (let i = 0; i < num; i++) {
    console.log("hey");
  }
};

annoyUser(3);

// Never

const neverStop = (): never => {
  while (true) {
    console.log("hey");
  }
};

// neverStop();

const throwError = (msg: string): never => {
  throw new Error(msg);
};

// throwError("Something went Wrong !");
