window.onload = addEventHandlers;

//assign these variables below!
let red;
let green;
let blue;

//pick an initial color
pickColor();

function addEventHandlers()
{
    //add a timer to a button click event
    let button = document.querySelector("button");
    button.onclick = function() {
        //wait a few seconds, then print a message
        window.setInterval(changeColor, 30);
    };
}

function changeColor()
{
    //slightly adjust the rgb values
    red--;
    green--;
    blue--;

    if (red <= 0 && green <= 0 && blue <= 0)
    {
        //the animation is done, pick a new color and animate again
        pickColor();
    }

    let page = document.body;
    let color = `rgb(${red}, ${green}, ${blue})`;
    page.style.backgroundImage = `radial-gradient(white, ${color})`;
}

function pickColor()
{
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
}

function printMessage()
{
    alert("Thanks for visiting!");
}
