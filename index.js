//  forEach function
const names = ["shakirat", "ope", "Kemi", "Farhan", "Faaiz"];
names.forEach(showNames);

function showNames(item, index, arr) {
  console.log(`'My name is ${item}'`);
}

// // forEach arrow function
// const vacationSpots = [
//   "Dubai",
//   "Saudi Arabia",
//   "Canada",
//   "Abuja",
//   "Netherlands",
// ];
// vacationSpots.forEach((item, index, arr) => {
//   console.log(`'I would like to visit ${item}'`);
// });

// // forEach addition of numbers
// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// let sum = 0;
// numbers.forEach((item) => {
//   sum += item;
// });

// console.log(sum);*/

// // forEach checking occurrences
// const occur = [
//   "shakirat",
//   "ope",
//   "Kemi",
//   "Farhan",
//   "Faaiz",
//   "shakirat",
//   "ope",
//   "shakirat",
//   "ope",
//   "Kemi",
//   "Farhan",
//   "Faaiz",
// ];

// let count = {};

// occur.forEach((item) => {
//   if (count[item]) {
//     count[item]++;
//   } else {
//     count[item] = 1;
//   }
// });

// console.log(count);

// /* //Map function
// //Printing a new to the console using the map array method is possible by declaring a new variable and assign the function being called to it
// //The code below explains it better.

// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// const numbersDouble = numbers.map(increase);

// function increase(value, index, arr) {
//   return value * index;
// }

// console.log(numbersDouble);

// // Map Array with an array of objects
// const products = [
//   {
//     name: "Kaftan",
//     price: 10000,
//     quantity: 50,
//   },
//   {
//     name: "Abaya",
//     price: 12000,
//     quantity: 10,
//   },
//   {
//     name: "Chiffon tops",
//     price: 3000,
//     quantity: 30,
//   },
// ];

// const totalProductsValue = products.map((item) => ({
//   name: item.name,
//   totalValue: item.price * item.quantity,
// }));

// console.log(totalProductsValue);

// // map array converting string to number

// const str = [
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "11",
//   "12",
//   "13",
//   "14",
//   "15",
//   "16",
//   "17",
//   "18",
//   "19",
//   "20",
// ];
// const num = str.map((item) => Number(item));

// console.log(num);

// // Filter method
// //To create an even or odd number from an array. Do this:

// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// const even = numbers.filter(isEven);
// const odd = numbers.filter(isOdd);
// const prime = numbers.filter(isPrime);

// function isEven(value) {
//   return value % 2 === 0;
// }

// function isOdd(value) {
//   return value % 2 === 1;
// }

// function isPrime(value) {
//   return value % 1, value === 1;
// }

// console.log(even);
// console.log(odd);
// console.log(prime);

// // To check for age in an array of objects

// const people = [
//   {
//     name: "Shakirat",
//     age: 22,
//   },
//   {
//     name: "Farhan",
//     age: 3,
//   },
//   {
//     name: "Atiat - Nur",
//     age: 20,
//   },
//   {
//     name: "Bukky",
//     age: 40,
//   },
// ];

// const adults = people.filter((person) => person.age >= 18);

// console.log(adults);

// // To remove duplicate element in an array

// const num = [1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 5, 6, 6, 6, 6, 6, 7, 7, 8, 9, 10];
// const nums = num.filter((value, index, arr) => {
//   return arr.indexOf(value) === index;
// });

// console.log(nums);

// */

// // multiplication table
// function printMultiplicationTable(number) {
//   console.log(`Multiplication table for ${number}`);
//   for (let i = 1; i <= 12; i++) {
//     let result = number * i;
//     console.log(`${number} x ${i} = ${result}`);
//   }
// }
// printMultiplicationTable(10);
