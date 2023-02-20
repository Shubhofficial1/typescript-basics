function Square(num) {
    return num * num;
}
Square(2);
function Greet(name) {
    return "Hello There , ".concat(name);
}
Greet("Shubham");
// Arrow functions
var doSomething = function (person, age, isAdmin) { };
doSomething("Shubham", 24, true);
// Default Parameters
function SquareArea(length, breadth) {
    if (length === void 0) { length = 10; }
    if (breadth === void 0) { breadth = 20; }
    return length * breadth;
}
console.log(SquareArea(10));
console.log(SquareArea(10, 30));
console.log(SquareArea(5));
