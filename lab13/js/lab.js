// fizzbuzz
// author: ally herro
// may 2025

let outputDiv = document.getElementById("output");
let result = "";

// use a for loop to print all the numbers from 1 to 200. Test and debug.
for (let i = 1; i <= 200; i++) {

    let str = "";
  
// multiples of 3, 5, and 7
    if(i % 105 == 0) {
        str = "FizzBuzzBoom!"
    }
   
// multiples of 3 and 5
        else if(i % 15 == 0) {
            str = "FizzBuzz!";
    
  }

// multiples of 3 and 7
        else if (i % 21 == 0) {
            str = "FizzBoom!";
  }

// multiples of 5 and 7
        else if (i % 35 == 0) {
            str = "BuzzBoom!";
  }

        else if (i % 3 == 0) {
            str = "Fizz!"; 
    
  }
        else if(i % 5 == 0) {
            str = "Buzz!";
    
  }
        else if(i % 7 == 0) {
            str = "Boom!";

  }
  
    else {
        str = i;
  }
  result += str + "<br>";
}

outputDiv.innerHTML = result;


