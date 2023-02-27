
//wait until the page loads
window.onload = loadedPage;

//this runs when the page is loaded
function loadedPage()
{
    //add an event handler to respond to clicks!
    let button = document.querySelector("button");
    button.onclick = clickedOnButton;
}

//this runs when the user clicks the button
function clickedOnButton()
{
    for (let i = 1; i <= 5; i++)
    {
        createNewDice();
    }
}

//create a new dice image and add to the play area
//(with an event handler so you can click on it)
function createNewDice()
{
    //create a new <img> element
    let image = document.createElement("img");
    image.src = getRandomFile();
    image.alt = "A six-sided die";
    image.className = "dice";

    //this function will execute when you click on the new die
    image.onclick = changeImage;

    //add the image as a child of the <div>
    let div = document.querySelector("#play-area");
    div.appendChild(image);
}

//the event parameter will tell us which <img>
//element was clicked
function changeImage(event)
{
    let image = event.target;
    image.src = getRandomFile();
}

//returns a random dice file
function getRandomFile()
{
    //get a number in the range [1,6]
    let number = Math.ceil(Math.random() * 6);
    return `images/${number}.png`;
}
