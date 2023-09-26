"use strict";
// Exercise 1
let helloWorld = 'Hello World!';
console.log(helloWorld);
// Exercise 2
let myName = 'Tyler';
console.log(myName);
// Exercise 3
function calcRecArea(length, width) {
    return length * width;
}
console.log(calcRecArea(2, 5));
// Exercise 4
function evenOrOdd(num) {
    return num % 2 === 0;
}
console.log('Should be true:', evenOrOdd(6));
console.log('Should be false:', evenOrOdd(7));
// Exercise 5
function displayDigitsLoop(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}
displayDigitsLoop(1, 10);
// Exercise 6
// const yourName: string = prompt('Enter you name:') ?? '';
// console.log(`Hello, ${yourName}!`);
// Exercise 7
function findFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(findFactorial(4));
// Exercise 8
function checkLeapYear(year) {
    return year % 4 === 0;
}
console.log('Should be false:', checkLeapYear(2023));
console.log('Should be true:', checkLeapYear(2024));
// Exercise 9
function sumAllNumbers(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumAllNumbers(1, 100));
// Exercise 10
const inputNum1 = 10; // prompt("Enter a number:", 1) ?? 1;
const inputNum2 = 5; // prompt("Enter another number:", 2) ?? 2;
console.log(inputNum1 + inputNum2);
console.log(inputNum1 - inputNum2);
console.log(inputNum1 * inputNum2);
console.log(inputNum1 / inputNum2);
// Exercise 11
const varString = "string";
const varNumber = 42;
const varBool = true;
const varNull = null;
let varUndefined = undefined;
let varObject;
const varArray = [0, 1, 2, 3];
let varNoDefaultValue;
// Exercise 12
let objList;
objList = [
    { food: "burger", price: 3 },
    { food: "chicken sandwich", price: 4 },
    { food: "fries", price: 2 },
    { food: "shake", price: 3 },
];
const list = document.createElement('ul');
document.body.appendChild(list);
for (let i = 0; i < objList.length; i++) {
    let listItem = document.createElement("li");
    list.appendChild(listItem);
    listItem.innerHTML = objList[i].food;
}
// Exercise 13
function arraryOfMultiples(mult, length) {
    let multArray = [];
    for (let i = 1; i <= length; i++) {
        multArray.push(mult * i);
    }
    return multArray;
}
console.log(arraryOfMultiples(7, 5));
console.log(arraryOfMultiples(12, 10));
console.log(arraryOfMultiples(17, 6));
// Exercise 14
function checkPosNegOrZed(numToCheck) {
    if (numToCheck < 0) {
        console.log(`${numToCheck} is a negative number.`);
    }
    else if (numToCheck === 0) {
        console.log(`${numToCheck} is 0.`);
    }
    else {
        console.log(`${numToCheck} is a positive number.`);
    }
}
checkPosNegOrZed(2);
checkPosNegOrZed(0);
checkPosNegOrZed(-2);
// Exercise 15
function calcMultTable(multTableNum) {
    let multTableArray = [];
    for (let i = 1; i <= 10; i++) {
        multTableArray.push(multTableNum * i);
    }
    return multTableArray;
}
console.log(calcMultTable(1));
console.log(calcMultTable(2));
console.log(calcMultTable(3));
// Exercise 16
function checkIfPrime(checkPrimeNum) {
    let isPrimeNumber = true;
    if (checkPrimeNum <= 1) {
        console.log("Primes are only positive numbers greater than 1.");
    }
    else if (checkPrimeNum > 1) {
        for (let i = 2; i < checkPrimeNum; i++) {
            if (checkPrimeNum % i === 0) {
                isPrimeNumber = false;
            }
        }
        if (isPrimeNumber) {
            console.log(`${checkPrimeNum} is a prime number.`);
        }
        else {
            console.log(`${checkPrimeNum} is not a prime number.`);
        }
    }
}
checkIfPrime(-2);
checkIfPrime(0);
checkIfPrime(1);
checkIfPrime(2);
checkIfPrime(3);
checkIfPrime(4);
checkIfPrime(5);
checkIfPrime(6);
checkIfPrime(7);
checkIfPrime(8);
checkIfPrime(9);
