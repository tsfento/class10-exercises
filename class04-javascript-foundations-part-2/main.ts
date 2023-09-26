// Exercise 1
function greet(name: string): string {
    return `Greetings, ${name}!`;
}

console.log(greet('Tyler'));

// Exercise 2
function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

console.log(multiply(2, 5));

// Exercise 3
let person: {
    name: string,
    age: number,
    gender: string,
};

person = {
    name: "Tyler",
    age: 42,
    gender: "Male",
};

console.log(person);

// Exercise 4
let car: {
    make: string,
    model: string,
    year: number,
};

car = {
    make: "Honda",
    model: "Fit",
    year: 2020,
};

console.log(car);

// Exercise 5
function reverseString(inputString: string): string {
    return inputString.split("").reverse().join("");
}

console.log("Hello reversed is " + reverseString("Hello") + ".");

// Exercise 6
function calculateArea(radius: number): number {
    return Math.PI * (radius * radius);
}

console.log(calculateArea(5).toFixed(2));

// Exercise 7
const now: Date = new Date();

console.log(`It is currently ${now.getHours().toString()}:${now.getMinutes().toString()} on ${(now.getMonth() + 1).toString()}/${now.getDate().toString()}/${now.getFullYear().toString()}.`);

// Exercise 8
const randomNum: number = Math.floor(Math.random() * 10) + 1;

console.log(randomNum.toFixed());

// Exercise 9
function insertString(stringToInsert: string): string {
    return `You entered: ${stringToInsert}.`;
}

console.log(insertString('potatoes'));

// Exercise 10
const ex10Button: HTMLElement = document.createElement('button');
document.body.appendChild(ex10Button).innerText = 'Exercise 10';
ex10Button.addEventListener('click', btnFunc);

function printObj(): string {
    const inputName: string = prompt('Enter your name:') ?? 'Tyler';
    const inputAge: number = Number(prompt('Enter your age:')) ?? 42;
    const inputJob: string = prompt('Enter your occuptation:') ?? 'Misanthrope';

    const outObj = {
        name: inputName.toString(),
        age: inputAge.toString(),
        occupation: inputJob.toString().toLowerCase(),
    }

    return `${outObj.name} is ${outObj.age} years old and is employed as a ${outObj.occupation}.`
}

function btnFunc() {
    console.log(printObj());
}

// Exercise 11
let keysAndValues: { [key: string]: string } = {};

keysAndValues = {
    d: 'A',
    c: 'B',
    b: 'C',
    a: 'D',
};

function splitAndReorder(inObj: { [key: string]: string }): string[] {
    const keyArr: string[] = Object.keys(inObj).sort();
    const valueArr: string[] = [];

    for (let i = 0; i < keyArr.length; i++) {
        valueArr.push(inObj[keyArr[i].toString()]);
    }

    return valueArr;
}

console.log(splitAndReorder(keysAndValues));

// Exercise 12
function reverseWords(str1: string): string {
    return str1.split(" ").reverse().join(" ");
}

console.log(reverseWords('reverse me baby'));

// Exercsie 13
function isBalanced(str2: string): boolean {
    const tempArr: string[] = [];
    const parentheses: string = '() {} []';
    
    for (let i = 0; i < str2.length; i++) {
        tempArr.push(str2[i]);

        let oParen = tempArr[tempArr.length - 2];
        let cParen = tempArr[tempArr.length - 1];

        let checkParens = oParen + cParen;

        if(parentheses.includes(checkParens)) {
            tempArr.pop();
            tempArr.pop();
        }
    }

    return tempArr.length === 0;
}

console.log('isBalanced = ' + isBalanced('()'));
console.log('isBalanced = ' + isBalanced('()[]{}'));
console.log('isBalanced = ' + isBalanced('(]'));
console.log('isBalanced = ' + isBalanced('([)]'));
console.log('isBalanced = ' + isBalanced('{[]}'));

// Exercise 14
function checkAnagram(word1: string, word2: string): boolean {
    let checkArr: string[] = [];

    if(word1.length != word2.length) {
        return false;
    }

    for (let i = 0; i < word2.length; i++) {
        checkArr.push(word1[i]);

        if(word2.includes(checkArr[0])) {
            checkArr.pop();
        }
    }

    return checkArr.length === 0;
}

console.log('checkAnagram = ' + checkAnagram('pork', 'beans'));
console.log('checkAnagram = ' + checkAnagram('care', 'race'));
console.log('checkAnagram = ' + checkAnagram('four', 'five'));
console.log('checkAnagram = ' + checkAnagram('slate', 'steal'));

// Exercise 15
function fizzBuzz(): (string | number)[] {
    let fizzBuzzArr: (string | number)[] = [];

    for (let i = 1; i <= 100; i++) {
        if(i > 1 && i % 3 === 0) {
            fizzBuzzArr.push('fizz');
        } else if (i > 1 && i % 5 === 0) {
            fizzBuzzArr.push('buzz');
        } else {
            fizzBuzzArr.push(i);
        }
    }

    return fizzBuzzArr;
}

console.log(fizzBuzz());

// Exercise 16
function checkPalindrome(word3: string): boolean {
    let checkStr1: string = word3.toLowerCase().split(' ').join('');
    
    let punctuationArr: string[] = [];
    let punctuation: string = '.,;:!?';

    for(let i = 0; i < checkStr1.length; i++) {
        punctuationArr.push(checkStr1[i]);

        if(punctuation.includes(punctuationArr[i])) {
            punctuationArr.pop();
        }
    }

    checkStr1 = punctuationArr.join('');
    let checkStr2 = checkStr1.split('').reverse().join('');

    return checkStr1 === checkStr2;
}

console.log('checkPalindrome = ' + (checkPalindrome('b o a . t')));
console.log('checkPalindrome = ' + (checkPalindrome('June')));
console.log('checkPalindrome = ' + (checkPalindrome('RACECAR')));
console.log('checkPalindrome = ' + (checkPalindrome('racecar')));

// Exercise 17
function reverseSentence(sentence1: string): string {
    let splitSentence: string[] = sentence1.split(" ");
    let joinSentence: string[] = [];

    for (let i = 0; i < splitSentence.length; i++) {
        joinSentence.push(splitSentence[i].split('').reverse().join(''));
    }

    return joinSentence.join(' ');
}

console.log(reverseSentence('reverse me baby'));