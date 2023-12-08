// let moving = true;
// let shouldBeMoving = true;

// if (moving) {
//   if (shouldBeMoving) {
//     console.log("No problem! This should be moving and it does!");
//   } else {
//     console.log("OK, time for some duct tape!");
//   }
// } else {
//   if (shouldBeMoving) {
//     console.log("Ok, some WD-40 should get this going!");
//   } else {
//     console.log("No problem! This should NOT be moving and it does not!");
//   }
// }

// const fixIt = (moving, shouldBeMoving) => {
//     if (moving) {
//       if (shouldBeMoving) {
//         console.log("No problem! This should be moving and it does!");
//       } else {
//         console.log("OK, time for some duct tape!");
//       }
//     } else {
//       if (shouldBeMoving) {
//         console.log("Ok, some WD-40 should get this going!");
//       } else {
//         console.log("No problem! This should NOT be moving and it does not!");
//       }
//     }
//   };

//   fixIt(true, true);
//   fixIt(true, false);
//   fixIt(false, false);
//   fixIt(false, true);

// Loop

// while loop
//   A while loop is a great choice when you don't know how many times a piece of programming should run:

//   Note: To use prompt and alert, you need to run this code in the browser, repl.it may also block this functionality. It is ok not to run this code but simply understand it.

// Let temp = 75

// while (temp > 70) {
// console.log(‘Keep that baby going!’)
// console.log(‘Cooling…’)
// temp -=1
// console.log(‘Ahh that feels better.’)

// console.log("building for loops")

// console.log("you only have three guesses, be careful with your choices");

// let access = false;

// for (let i = 3; i >= 1; i--) {
//   let password = prompt("what is the password");
//   console.log(i);
//   if (password === "password1234") {
//     access = true;
//     break;
//   }
//   if (i === 3) {
//     alert(`You only have 2 guesses left`);
//   } else if (i === 2) {
//     alert("You only have 1 guess left!");
//   }
// }
// if (access) {
//   alert("Congratulations! You now have access to your account");
// } else {
//   alert("Sorry, you have lost access forever");
// }

//truthiness & falsiness
//falsey values "", null & undefined, 0 , NAN, false

// // let access = ""
// if (access)
// console.log('cool')
// } else {
//     console.log('not cool'
//     )
// }

//Polya Problem Solving Methodology;
//1: Understand the problem (ask clarifying q's)
//2: Make a plan (pseudocoding out the steps)
//3: Carry out the plan ( write the code!)
// //4: Look back, check and interpret (revise for edge cases)

// const isPrime = (num) => {
// //   // check if the argument is a positive whole number
// //   // Line below the first checks if num is a number data type , then checks if is positive, then checks if it is an integer( no decimal)
//   if (typeof num !== "number" || num <= 0 || num !== parseInt(num))
// //     return "Argument must be a positive whole number";
// //   // start iterating at 2 and iterate up until num argument
//   for (let i = 2; i < num; i++) {
// // //     // determine if it's a prime by dividing the num by our iteratorm  and seeing if it has no remainder
// //     if (num % i === 0) {
// //     }
// // //     // if there is no remainder, it is not prime , return false
// //     return false;
// // //   }
// // //   //Return true, because we iterated through all the numbers and didnt return false
// //   return true;
// // };

// // console.log(isPrime(7.5))
// // isPrime(100) //  return an array w all prime numbers up to 100

// const printPrimes = (limit) => {
//   //start with an empty array
//   const primes = [];
//   //write a loop  starting at 2 and ending at the number entered
//   for (let i = 2; i < limit; i++) {
//     // check if the number is prime
//     if (isPrime(i)) {
//       // if prime, push into the array
//       primes.push(i);
//     }
//     //if not prime, do nothing. go to the next number.
//   }
//   return primes;
// };

// console.log(printPrimes(100));
// console.log(isPrime(79));

// //Function Declaration: will hosit to the top pf it's scope. Meaning the function can be referenced anywhere , even before it is defined.
// function myFunction() {}

// // Function Expression
// const myFunc = function (){}

// // Arrow Function ( another function expression)
// const myArrowFunc = () => {}

// function checkerboard(size):
//     board = []
//     for i in range(size)
//         row = []
//         for j in range(size)
//             if (i + j) % 2 == 0
//                 row.append('X')
//             else:
//                 row.append('O')
//         board.append(row)
//     return board

// Jackie's
// function createCheckerboard(size, length) {
//     let board = "";
//     for (let i = 0; i < size; i++) {
//       for (let j = 0; j < length; j++) {
//         if ((i + j) % 2 === 0) {
//           board += "X ";
//         } else {
//           board += "O ";
//         }
//       }
//       board += "\n";
//     }
//     console.log(board);
//   }
//   createCheckerboard(8);

const createCheckerboard = (num) => {
  // create a empty string to hold a row
  let row = "";
  // create empty string to hold our checkerboard
  let checkerboard = "";
  // create row: iterate up until the num argument
  for (i = 0; i < num; i++) {
    // if iterator is even add a "#" to the row string
    if (i % 2 === 0) {
      row += "#";
    } else {
      // Else add "" to the row string
      row += " ";
    }
  }
  // Create a checkerboard : iterate up until the num argument
  for (i = 0; i < num; i++) {
    // if iterator is even, add row string to checkerboard string , and add new line character.
    if (i % 2 === 0) {
      checkerboard += row;
      checkerboard += "\n";
    } else {
      // else: flip the string and add it to the checkerboard, and add new line character
      checkerboard += row.split('').reverse().join('')
      checkerboard += '\n'
    }
  }
  //return checkerboard string
  return checkerboard

}

console.log(checkerboard(8))
