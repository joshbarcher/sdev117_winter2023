//wait for the page to load
window.onload = function() {
    let button = document.querySelector("button");
    button.onclick = requestCat;
};

function requestCat()
{
    let address = "https://api.thecatapi.com/v1/images/search?limit=10";
    let configuration = {
        method: "get",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": ""
        }
    };

    fetch(address, configuration)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            displayCats(data);
        });
}

function displayCats(catArray)
{
    //select the section to hold all cat images
    let mySection = document.querySelector("#images-area");

    //first remove any old images in the section
    mySection.innerHTML = "";

    for (let i = 0; i < catArray.length; i++)
    {
        let cat = catArray[i];

        //this is one of the things I'm gonna do in
        //our last assignment
        let newImage = document.createElement("img");
        newImage.src = cat.url;
        newImage.alt = "A random cat image";

        mySection.appendChild(newImage);
    }
}

