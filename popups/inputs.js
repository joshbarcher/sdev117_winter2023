
alert("Welcome to my program!");

//gather inputs
let name = prompt("What is your name?");
alert(`Thanks for using my program ${name}`);

//the prompt() function always returns a string
let num1 = prompt("Enter a number");
let num2 = prompt("Enter another number");

//convert a variable value to a number
//use parseInt() or parseFloat()
num1 = parseInt(num1);
num2 = parseInt(num2);

//print out the data type for num1 and num2
alert(`num1 is a ${typeof num1}`);
alert(`num2 is a ${typeof num2}`);

//determine what type of number the user entered
if (num1 === 0)
{
    console.log("The number is zero");
}
else if (num1 < 0)
{
    console.log("The number is negative");
}
else
{
    console.log("The number is positive");
}

let addResult = num1 + num2;
alert(`Adding ${num1} + ${num2} = ${addResult}`);
