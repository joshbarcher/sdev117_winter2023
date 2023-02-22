let random = Math.ceil(Math.random() * 10);
let file = `images/${random}.png`;

let img = document.querySelector("img");
img.src = file;

