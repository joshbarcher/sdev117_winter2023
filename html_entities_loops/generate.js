//generate HTML entities
let para = document.querySelector("p#symbols");
for (let i = 1; i <= 15000; i++)
{
    //&#30; &#31; &#32; ...
    let entity = `&#${i}; `;
    para.innerHTML += entity;
}

