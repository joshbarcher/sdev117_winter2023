
let name = "Joshua Beatty Archer";

//make some changes
name = replace(name);
name = prepend(name, "Mr. ");
name = capitalize(name);

console.log(name);

//a cool way to nest function calls!
console.log(capitalize(prepend(replace("Joshua Leland Bryce Curtiss"), "Mr. ")));
