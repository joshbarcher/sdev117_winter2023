//wait until the page loads
window.onload = handlePageLoad;

function handlePageLoad()
{
    let myImage = document.querySelector("img");
    let para = document.querySelector("#output");

    let selected = false;
    myImage.onclick = function() {
        if (selected === true)
        {
            myImage.style.border = "";
            myImage.style.borderRadius = "";
        }
        else
        {
            myImage.style.border = "10px solid black";
            myImage.style.borderRadius = "20px";
        }

        //flip the boolean to the other value
        selected = !selected;
    };

    //add an event handler to respond to double-clicks
    myImage.ondblclick = function() {
        myImage.style.border = "3px solid green";
    };

    myImage.onmouseenter = function() {
        para.innerHTML += "Mouse Entered<br>";
    };

    /*myImage.onmousemove = function() {
        para.innerHTML += "Mouse Moved<br>";
    };*/

    myImage.onmouseleave = function() {
        para.innerHTML += "Mouse Leave<br>";
    }

    //adding more than one type of event
   /* myImage.addEventListener("click", function() {
        myImage.style.border = "10px solid black";
        myImage.style.borderRadius = "20px";
    });

    myImage.addEventListener("click", function() {
        let number = Math.random();
        para.innerHTML += `Random number is ${number}<br>`;
    });*/
}

