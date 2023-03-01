window.onload = pageLoaded;

function pageLoaded()
{
    //respond to key presses in the textbox
    let box = document.querySelector("#username");
    box.onkeydown = keyHandler;
}

function keyHandler(event)
{
    let key = event.key;

    //stop if we are using one of the "meta" keys
    let badKeys = ["Tab", "CapsLock", "Shift", "Control",
                   "Enter", "Home", "End", "Backspace",
                   "Alt", "Delete", "Insert"];
    for (let i = 0; i < badKeys.length; i++)
    {
        if (badKeys[i] === key)
        {
            return; //exit
        }
    }

    //stop the default key being put into the box
    event.preventDefault();

    key = key.toLowerCase();

    let box = document.querySelector("#username");
    box.value += key;
}

