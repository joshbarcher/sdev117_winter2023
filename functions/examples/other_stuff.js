
//defining a function and storing
//it in the adder variable
let adder = function(a, b) {
    return a + b;
};

//define three more variables with
//subtract, multiply, and divide functions
let subtracter = function(a, b) {
    return a - b;
};

let multiplier = function(a, b) {
    return a * b;
};

let divider = function(a, b) {
    return a / b;
};

calculator(adder, "adding", 3, 13);
calculator(subtracter, "subtracting", 3, 13);
calculator(multiplier, "multiplying", 3, 13);
calculator(divider, "dividing", 3, 13);

//the calculator() function accepts another function
//and operators
function calculator(myFunction, operationType, oper1, oper2)
{
    console.log(`Operation - ${operationType} ${oper1} and ${oper2}`);

    let outcome = myFunction(oper1, oper2);
    console.log(`Outcome is ${outcome}`);
}

