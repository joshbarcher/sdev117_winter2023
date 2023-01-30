
//pass in some bad "arguments"
printMessage(42);
printMessage(true);

//print out our message three times!
for (let i = 1; i <= 3; i++)
{
    printMessage("Todd");
}

//sender is a "parameter"
function printMessage(sender)
{
    //only print out the message if we have a string
    //for the sender?
    if (typeof sender === "string")
    {
        console.log(`Message sent from ${sender}`);
    }
    console.log("How are you?");
}

