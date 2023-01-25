/*
    Generate random numbers from 1 to 20, print each
    number to the console, then stop when a 1 is
    generated.
 */

//we need a sentinel value (controls the loop)
let roll = 0;
let numberRoll = 0;
while(roll !== 1)
{
    //generate the random number (Math.ceil() rounds up,
    //Math.floor() rounds down, Math.round() rounds)
    roll = Math.ceil(Math.random() * 20);
    numberRoll++;

    //print it
    console.log(`Role: ${roll}`);
}

console.log(`It took ${numberRoll} rolls to get 1`);
console.log("All done!");

