
//select all list items
let listItems = document.querySelectorAll("#favorites li");

for (let i = 0; i <= listItems.length - 1; i++)
{
    let item = listItems[i];
    item.innerHTML += " is awesome!";
}

//can you add the text "(actress)" to the end of all
//list items for actresses?
let actresses = document.querySelectorAll("#favorites .actress");

for (let i = 0; i <= actresses.length-1; i++)
{
    let item = actresses[i];
    item.innerHTML += " (actress)";
}

//select by tag name alone
let items = document.getElementsByTagName("ol");
for (let i = 0; i < items.length; i++)
{
    items[i].style.backgroundColor = "rgb(175,231,176)";
}

//select by class name
let actors = document.getElementsByClassName("actor");
for (let i = 0; i < actors.length; i++)
{
    actors[i].style.textDecoration = "rgb(150,200,140) underline";
}