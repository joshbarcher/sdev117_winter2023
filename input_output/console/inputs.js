//let's create some variables with strings
let firstName = "Josh";
let lastName = 'Archer';

let weather = "cloudy";
let outlook = "not good";

//this is called a string template literal (using backticks)
let message = `Hello, my name is ${firstName} ${lastName}`;

console.log("Hello, world!");
console.log(firstName);
console.log(lastName);

//printing multiple values
console.log("My name is", firstName, lastName);
console.log("The weather is " + weather +
            " the outlook is " + outlook);
console.log(message);

//one more example
let red = 200;
let blue = 150;
let green = 0;

console.log(`The color was (${red}, ${green}, ${blue})`);
console.log(`Here is some division: ${13 / 3}`);

//an obvious mistake!
//console.log(

