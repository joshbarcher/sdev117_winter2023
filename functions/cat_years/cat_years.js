program();

//program as a whole
function program()
{
    let catName = getUserInput("Enter your cat's name");
    let catAge = getUserInput("Enter your cat's age");

    //convert age to a number
    catAge = parseFloat(catAge);

    alert(`Thanks for entering ${catName}'s name and age`);

    //convert cat years to human years
    let humanAge = getHumanYears(catAge);
    showResults(catName, catAge, humanAge);
}

//get user inputs
function getUserInput(message)
{
    let input = prompt(message);
    while (input === "")
    {
        alert("Error: please enter a value");
        input = prompt(message);
    }

    return input;
}

//convert cat years to human years
function getHumanYears(catYears)
{
    const YEAR_1 = 15;
    const YEAR_2 = 9;

    if (catYears === 1)
    {
        return YEAR_1;
    }
    else if (catYears === 2)
    {
        return YEAR_1 + YEAR_2;
    }
    else
    {
        let humanYears = YEAR_1 + YEAR_2;
        let remainingYears = catYears - 2;

        humanYears = humanYears + (4 * remainingYears);
        return humanYears;
    }
}

//show results
function showResults(name, catYears, humanYears)
{
    alert(`Here are the results\n
           Name: ${name}\n
           Years (Cat): ${catYears}\n
           Years (Human): ${humanYears}`);
}
