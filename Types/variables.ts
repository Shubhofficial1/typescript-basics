// String
let myName: string = "Shubham";
// Number
let age: Number = 24;
// Boolean
let isSmart: Boolean = false;

// Type inference
var x = 10;
// x = "khda"; ==> Invalid

// Any

let thing: any = "hey";
// thing = 1;
// thing = false;
// thing.toUpperCase();

// Use case

let movies = ["RRR", "Space force", "Suits"];
let foundMovie: string;
for (let movie of movies) {
  if (movie == "Suits") {
    foundMovie = movie;
  }
}
