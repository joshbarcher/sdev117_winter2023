//both these functions give access to a single
//HTML element
//let singleElement = document.getElementById("");
//let anotherSingle = document.querySelector("");

//to select a group of elements...
let listItems = document.querySelectorAll("li");
console.log(listItems);

for (let i = 0; i <= listItems.length - 1;  i++)
{
    let item = listItems[i];

    //cut off all but the first four characters from the names
    item.innerHTML = item.innerHTML.substring(0, 4);
    item.style.backgroundColor = "lightyellow";
}