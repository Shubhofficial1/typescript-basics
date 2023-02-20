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
// Return Type Annotations
function SquareAreaNew(length, breadth) {
    if (length === void 0) { length = 10; }
    if (breadth === void 0) { breadth = 20; }
    return length * breadth;
}
function Random(num) {
    if (Math.random() > 0.5) {
        return num.toString();
    }
    return num;
}
var add = function (x, y) {
    return x + y;
};
// Anonymous functions
var colors = ["green", "yellow", "red"];
colors.forEach(function (color) {
    return color.toUpperCase();
});
// Void Return types
var annoyUser = function (num) {
    for (var i = 0; i < num; i++) {
        console.log("hey");
    }
};
annoyUser(3);
// Never
var neverStop = function () {
    while (true) {
        console.log("hey");
    }
};
// neverStop();
var throwError = function (msg) {
    throw new Error(msg);
};
throwError("Something went Wrong !");
