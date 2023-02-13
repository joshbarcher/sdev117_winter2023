//an object that represents a class at GRC
let classRoom = {
    instructor: {
        first: "Josh",
        last: "Archer",
        tenured: true,
        degree: "Master's In Computer Science"
    },
    title: "SDEV 117 - Javascript",
    credits: 5,
    asynchronous: true,
    seatsAvailable: 24,
    times: {
        monday: "9-10:50am",
        tuesday: "",
        wednesday: "9-10:50am",
        thursday: "",
        friday: "1 hour asynchronous"
    },
    printName: function() {
        //print the title property of "this" object
        console.log(this.title);
        console.log(`Instructor - ${this.instructor.first}`);
    },
    printHello: function() {
        console.log("Hello");
    }
};

//print out the instructor credentials
console.log(`Credentials are ${classRoom.instructor.degree}`);
console.log(`On Monday we meet: ${classRoom.times.monday}`);

//call a method on the object
classRoom.printName();

let anotherClassRoom = {
    instructor: "Ken Hang",
    title: "CS 108 - Data Analytics Introduction"
}

console.log(classRoom);
console.log(anotherClassRoom);

//use the dot-notation to access object properties
let courseTitle = classRoom.title;
console.log(`Title is ${courseTitle}`);

if (classRoom.credits === 5)
{
    console.log("This is a full course");
}

if (classRoom.asynchronous)
{
    console.log("Don't forget to click on Zoom");
}
else
{
    console.log("Gas up your car!");
}

//create a book object
let book = {
    title: "Killing Floor",
    author: "Lee Child",
    pages: 600,
    synopsis: "Jack Reacher is accused of murder...",
    format: "hardcover",
    genres: ["action", "murder-mystery", "detective"],
    "authors note": "Read carefully",
    printBook: function() {
        //print the book using a nice format
        let line = "**********************************";
        console.log(`${this.title} by ${this.author}`);
        console.log(line);

        console.log(`Pages: ${this.pages}`);
        console.log(`Format: ${this.format}`);
        console.log(`Number of genres: ${this.genres.length}`)

        console.log("Genres:");
        this.printGenres();

        console.log(line);
        console.log(); //new line
    },
    printGenres: function() {
        for (let i = 0; i <= this.genres.length - 1; i++)
        {
            console.log(this.genres[i].toUpperCase());
        }
    }
};

book.printBook();

//accessing using alternative [ ] notation
console.log(book["authors note"]);
console.log(`Synopsis is ${book["synopsis"]}`)

//solve all of these using square brackets (no dot notation)
//#1 print out the number of genres in the book
let numGenres = book["genres"].length;
console.log(`Number of genres is ${numGenres}`)

//#2 print our your instructors last name in the classroom
let lastName = classRoom["instructor"]["last"];
console.log(`Last name of instructor is ${lastName}`);

//#3 print out our meeting time on wednesday in the classroom
let wednesday = classRoom["times"]["wednesday"];
console.log(`On wednesday we meet at ${wednesday}`);
