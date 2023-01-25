let number;
do
{
    //ask the user for a number
    number = prompt("Please enter a number");
    number = parseInt(number);
} while(Number.isNaN(number));

alert(`The number is ${number}`);
