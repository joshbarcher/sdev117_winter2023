//a variable outside of a function has "global"
//scope
let pi = 3.14159265359;

let area1 = areaOfCircle(3.5);
let area2 = areaOfCircle(10.1);

console.log(`Area of circle #1 is ${area1}`);
console.log(`Area of circle #2 is ${area2}`);

function areaOfCircle(radius)
{
    //rule - you can access global variables
    //everywhere after they are defined
    //(includes inside functions)
    let area = pi * radius * radius;

    return area;
}

//rule - you cannot access local variables
//outside of their scope (the function)
//console.log(radius);
//console.log(pi);
//console.log(area);

//the rule for the scope of variables works
//in if-statements and loops
for (let i = 1; i <= 20; i++)
{
    let exponent = 2 ** i;
    console.log(`Exponent is ${exponent}`);
}

//the variable in our loop is out of scope here
//console.log(`The last exponent is ${exponent}`);
console.log("The indexer i is", i);
