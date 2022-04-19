//very easy

var num = 8;
var num2 = 2;

console.log(num - num2);


// //easy
let name1 = 'Alejandro';
let name2 = 'Alexis';
let nameLength1 = name1.length;
let nameLength2 = name2.length;

if (nameLength1 > nameLength2) {
    console.log(`The name ${name1} is longer than ${name2} by ${nameLength1 - nameLength2}.`);    
} else { 
    console.log(`The name ${name2} is longer than ${name1} by ${nameLength2 - nameLength1}.`);    
}

//medium

let userInput = prompt('Are you screaming, whispering, or talking normal?');

if (userInput === userInput.toUpperCase()){
    console.log("STOP SCREAMING");
}
else if (userInput === userInput.toLowerCase()){
    console.log("you're whispering");
}
else
{
    console.log("Thank for using your normal voice");
}

//hard

function addition(firstNumber, secondNumber) {
    return parseInt(firstNumber) + parseInt(secondNumber);
}
function subtraction(firstNumber, secondNumber) {
    // return parseInt(firstNumber) - parseInt(secondNumber);
    return parseInt(firstNumber) - parseInt(secondNumber);
}
function multiplication(firstNumber, secondNumber) {
    return parseInt(firstNumber) * parseInt(secondNumber);
}
function division(firstNumber, secondNumber) {
    return parseInt(firstNumber) / parseInt(secondNumber);
}


console.log(addition (139, 30));
console.log(subtraction (123, 27));
console.log(multiplication (23, 2));
console.log(division (80,4 ));


//VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, 
//and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"

let firstNumber = prompt("Enter a Number");
let operator = prompt('Enter Operator: +, -, *, /.');
let secondNumber = prompt('Enter a Number');

switch (operator) {
    case '+' :
        let add = addition(firstNumber, secondNumber);
        alert(`${firstNumber} + ${secondNumber} = ${add}`);
        // console.log(parseInt(firstNumber) + parseInt(secondNumber));
        break;
    case '-' :
       let sub = subtraction(firstNumber, secondNumber);
       alert(`${firstNumber} - ${secondNumber} = ${sub}`);
        break;
    case '*' :
       let times = multiplication(firstNumber, secondNumber);
       console.log(times);
       alert(`${firstNumber} * ${secondNumber} = ${times}`);
        break;
    case '/' :
        let divide = division(firstNumber, secondNumber);
        alert(`${firstNumber} / ${secondNumber} = ${divide}`);
        break;
    default: 
        break;
}

