let object = {
    cpu: "Intel I9 9900k",
    memory: "32 gb",
    mobo: "Asus ROG ...",
    powerSupply: "Corsair 1000 Watt"
};

//convert a JS object to JSON text
let text = JSON.stringify(object);
console.log(text);

//convert JSON text to a JS object
let converted = JSON.parse(text);
console.log(converted);

