window.onload = function() {
    let textbox = document.getElementById("textbox");
    textbox.onkeydown = record;
}

function record(event)
{
    let key = event.key;
    console.log(key);
}

