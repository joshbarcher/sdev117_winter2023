window.onload = function() {
    let button = document.querySelector("button");
    button.onclick = summarize;
}

function summarize(event)
{
    //stop the default behavior (the form submitting)
    event.preventDefault();

    //read in our form values
    let movieTitle = document.querySelector("#title").value;
    let movieLength = document.querySelector("#length").value;

    console.log(movieTitle);
    console.log("Movie length is " + movieLength);

    //loop over all genre elements and figure out which one is selected
    let genre = "";
    let radioButtons = document.querySelectorAll("input[name='genre']");
    for (let i = 0; i < radioButtons.length; i++)
    {
        let button = radioButtons[i];
        if (button.checked === true)
        {
            console.log("Genre is " + button.value);
        }
    }

    let checkBoxes = document.querySelectorAll("input[type='checkbox']");
    for (let i = 0; i < checkBoxes.length; i++)
    {
        if (checkBoxes[i].checked === true)
        {
            console.log(checkBoxes[i].value);
        }
    }
}

