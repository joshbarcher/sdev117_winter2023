
//this is pretty easy to understand
let myMessage = returnOutput("Hello, everyone!");
console.log(myMessage);

//what happens here?
output("Hello, everyone!");

function output(message)
{
    console.log(`Message is ${message}`);
}

function returnOutput(message)
{
    return `Message is ${message}`;
}
