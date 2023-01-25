//selecting the button on the page
let button = document.querySelector("button");

//assigns a function to respond when the button is clicked
button.onclick = function(event) {
    //stop the form from submitting
    event.preventDefault();

    let number = Math.ceil(Math.random() * 6);
    let newImg = `<img src="images/${number}.png" alt="A die">`;

    let diceArea = document.querySelector(".dice-area");
    diceArea.innerHTML += newImg;
};

