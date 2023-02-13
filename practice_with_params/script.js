
add(10, 3); //<-- these are arguments (they are passed to parameter variables)
add(2, 1);

let myValue1 = 15;
let myValue2 = 20;
add(myValue1, myValue2);

function add(first, second) //<-- these are parameters (they hold inputs)
{
    let result = first + second;
    console.log(`Result is ${result}`);
}

drawBuilding();

function drawBuilding()
{
    let buildingX = 100;
    let buildingY = 20;

    drawWindow(buildingX);
}

function drawWindow(buildX)
{
    console.log("The build is at ", buildX);
}







