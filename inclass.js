//very easy

var num = 8;
var num2 = 2;

console.log(num - num2);


//easy
let name1 = 'Alejandro';
let name2 = 'Alexis';
let nameLength1 = name1.length;
let nameLength2 = name2.length;

if (nameLength1 > nameLength2) {
    console.log(`The name ${name1} is longer than ${name2} by ${nameLength1 - nameLength2}.`);    
} else { 
    console.log(`The name ${name2} is longer than ${name1} by ${nameLength2 - nameLength1}.`);    
}

// (nameLength1 > nameLength2) ? console.log(`The name ${name1} is longer than ${name2} by ${nameLength1 - nameLength2}.`) 
//  : console.log(`The name ${name2} is longer than ${name1} by ${nameLength2 - nameLength1}.`);    

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

function addition(n0, n1) {
    return n0 + n1;
}
function subtraction(n0, n1) {
    return n0 - n1;
}
function multiplication(n0, n1) {
    return n0 * n1;
}
function division(n0, n1) {
    return n0 / n1;
}


console.log(addition (139, 30));
console.log(subtraction (123, 27));
console.log(multiplication (23, 2));
console.log(division (80,4 ));


// very hard
