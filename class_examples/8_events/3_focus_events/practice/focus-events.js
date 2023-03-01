//wait for page load
window.onload = addFocusEvents;

//then assign focus events to all form elements
function addFocusEvents()
{
    let formElements = document.querySelectorAll("input, select");
    for (let i = 0; i < formElements.length; i++)
    {
        let element = formElements[i];

        //add event handlers when the element gains or loses "focus"
        element.onfocus = gainFocus;
        element.onblur = loseFocus;
    }
}

//handles an element gaining focus
function gainFocus(event)
{
    //change the background color of the element that gained focus
    let formElement = event.target;

    formElement.style.backgroundColor = "lightgreen";
    formElement.style.border = "4px solid darkgreen";
}

function loseFocus(event)
{
    let formElement = event.target;

    formElement.style.backgroundColor = "";
    formElement.style.border = "";
}

