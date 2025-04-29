// index.js - purpose and description here
// Author: Ally Herro <aherro@ucsc.edu>
// Date: 28 April 2025

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

// index.js - arrays and objects
// author: Ally Herro <aherro@ucsc.edu>
// date: 28 April 2025

// define variables
myTransport = ["walking", "bus", "bumming a ride", "imaginary VW Beetle from last week"];

// create an object for myMainRide
myMainRide = {
  make: "Volkswagen",
  model: "Beetle",
  color: "brown",
  year: 2013,
  age: function() {
    return 2025 - this.year;
  }
}

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");

document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '/t'), "</pre>"
);
