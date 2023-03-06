//wait for the page to load
window.onload = function() {
    let button = document.querySelector("button");
    button.onclick = requestCat;
};

function requestCat()
{
    let address = "https://api.thecatapi.com/v1/images/search";
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
            displayCat(data[0]);
        });
}

function displayCat(cat)
{
    let image = document.querySelector("img");
    image.src = cat.url;

    //show the image
    image.style.display = "block";
}

