//select all list items in the <ul> and add a class name
let items = document.querySelectorAll("ul > li");
for (let i = 0; i < items.length; i++)
{
    let listItem = items[i];
    listItem.onmouseenter = mouseIn;
    listItem.onmouseleave = mouseOut;
}

function mouseIn(event)
{
    //get the list item that is being hovered over
    let item = event.target;
    item.className = "box";
}

function mouseOut(event)
{
    //get the list item that is no longer being hovered over
    let item = event.target;
    item.className = "";
}
