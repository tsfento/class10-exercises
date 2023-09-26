// Exercise 1
let helloWorld: string = 'Hello World!';

console.log(helloWorld);

// Exercise 2
let myName: string = 'Tyler';

console.log(myName);

// Exercise 3
function calcRecArea(length: number, width: number): number {
    return length * width;
}

console.log(calcRecArea(2, 5));

// Exercise 4
function evenOrOdd(num: number): boolean {
    return num % 2 === 0;
}

console.log('Should be true:', evenOrOdd(6));
console.log('Should be false:', evenOrOdd(7));

// Exercise 5
function displayDigitsLoop(start: number, end: number) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}

displayDigitsLoop(1, 10);

// Exercise 6
// const yourName: string = prompt('Enter you name:') ?? '';

// console.log(`Hello, ${yourName}!`);

// Exercise 7
function findFactorial(num: number): number {
    let factorial = 1;

    for(let i = 1; i <= num; i++) {
        factorial *= i;
    }

    return factorial;
}

console.log(findFactorial(4));

// Exercise 8
function checkLeapYear(year: number): boolean {
    return year % 4 === 0;
}

console.log('Should be false:', checkLeapYear(2023));
console.log('Should be true:', checkLeapYear(2024));

// Exercise 9
function sumAllNumbers(start: number, end: number): number {
    let sum: number = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumAllNumbers(1, 100));

// Exercise 10
const inputNum1: number = 10; // prompt("Enter a number:", 1) ?? 1;
const inputNum2: number = 5; // prompt("Enter another number:", 2) ?? 2;

console.log(inputNum1 + inputNum2);
console.log(inputNum1 - inputNum2);
console.log(inputNum1 * inputNum2);
console.log(inputNum1 / inputNum2);

// Exercise 11
const varString: string = "string";
const varNumber: number = 42;
const varBool: boolean = true;
const varNull: null = null;
let varUndefined: undefined = undefined;
let varObject: {
    name: string,
    type: object,
};
const varArray: number[] = [0, 1, 2, 3];
let varNoDefaultValue: undefined;

// Exercise 12
let objList: {
    food: string,
    price: number,
}[];

objList = [
    { food: "burger", price: 3 },
    { food: "chicken sandwich", price: 4 },
    { food: "fries", price: 2 },
    { food: "shake", price: 3 },
];

const list: HTMLElement = document.createElement('ul');
document.body.appendChild(list);

for (let i = 0; i < objList.length; i++) {
    let listItem: HTMLElement = document.createElement("li");
    list.appendChild(listItem);
    listItem.innerHTML = objList[i].food;
}

// Exercise 13
function arraryOfMultiples(mult: number, length: number): number[] {
    let multArray: number[] = [];

    for (let i = 1; i <= length; i++) {
        multArray.push(mult * i);
    }
    
    return multArray;
}

console.log(arraryOfMultiples(7, 5));
console.log(arraryOfMultiples(12, 10));
console.log(arraryOfMultiples(17, 6));

// Exercise 14
function checkPosNegOrZed (numToCheck: number) {
    if (numToCheck < 0) {
        console.log(`${numToCheck} is a negative number.`);
    } else if (numToCheck === 0) {
        console.log(`${numToCheck} is 0.`);
    } else {
        console.log(`${numToCheck} is a positive number.`);
    }
}

checkPosNegOrZed(2);
checkPosNegOrZed(0);
checkPosNegOrZed(-2);

// Exercise 15
function calcMultTable(multTableNum: number): number[] {
    let multTableArray: number[] = [];
    
    for (let i = 1; i <= 10; i++) {
        multTableArray.push(multTableNum * i);
    }

    return multTableArray;
}

console.log(calcMultTable(1));
console.log(calcMultTable(2));
console.log(calcMultTable(3));

// Exercise 16
function checkIfPrime(checkPrimeNum: number) {
    let isPrimeNumber: boolean = true;

    if (checkPrimeNum <= 1) {
        console.log("Primes are only positive numbers greater than 1.");
    } else if (checkPrimeNum > 1) {
        for (let i = 2; i < checkPrimeNum; i++) {
            if (checkPrimeNum % i === 0) {
                isPrimeNumber = false;
            }
        }

        if (isPrimeNumber) {
            console.log(`${checkPrimeNum} is a prime number.`);
        } else {
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