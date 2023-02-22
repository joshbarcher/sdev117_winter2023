//select the first link and change it
let first = document.querySelector("a");

//change the HTML attributes
first.href = "https://addons.mozilla.org/en-US/firefox/addon/grammarly-1/";
first.textContent = "Grammarly";
first.target = "blank";

first.setAttribute("href", "https://addons.mozilla.org/en-US/firefox/addon/darkreader/");
first.textContent = "Dark Reader";
first.setAttribute("target", "_blank");
