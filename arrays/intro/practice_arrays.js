//create an array of hobbies
let hobbies = ["fishing", "bauffing", "reading", "snowboarding",
               "war-hammer", "movies", "video games",
               "cars", "painting"];

console.log(hobbies);

//the length property prints the number of elements in the array
console.log("Number of elements", hobbies.length);

//access elements from an array
console.log("First hobby is", hobbies[0]);
console.log("Second hobby is", hobbies[1]);
console.log("Last hobby is", hobbies[hobbies.length - 1]);

//updating (replace/change) elements in an array
hobbies[2] = "reading sci-fi/fantasy";
hobbies[hobbies.length - 1] = "glass painting";

console.log(hobbies);

//loop over the entire array
for (let i = 0; i <= hobbies.length - 1; i++)
{
    //access hobbies[0], hobbies[1], hobbies[2], ...
    let hobby = hobbies[i];
    console.log(hobby.toUpperCase(),
        ` - Hobby has ${hobby.length} characters`);
}

//push() and pop() allow us to resize the array (in a limited way)
hobbies.push("rally racing");
hobbies.push("coding");
hobbies.push("driving sims");

console.log(hobbies);

hobbies.pop(); //remove the highest index element
console.log(hobbies);