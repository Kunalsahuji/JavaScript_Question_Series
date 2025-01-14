{
    // 1. Basic Console Usage

    // • Print a message to the console.
    console.log("Hello, world!");
    // Output: Hello, world!

    // • Log the result of a mathematical operation (2 + 2).
    console.log(2 + 2);
    // Output: 4

    // • Log a variable’s value and track changes using console.log().
    let count = 0;
    console.log("Initial count:", count);
    count += 5;
    console.log("Updated count:", count);
    // Output:
    // Initial count: 0
    // Updated count: 5
}

{
    // 2. Variables and Data Types

    // • Declare a variable using let and const.
    let variable = "I can change";
    const constant = "I cannot change";
    console.log(variable);
    console.log(constant);
    // Output:
    // I can change
    // I cannot change

    // • Assign and reassign a value to a variable.
    variable = "New value assigned";
    console.log(variable);
    // Output: New value assigned

    // • Determine the type of a variable using typeof.
    console.log(typeof variable); // Output: string
    console.log(typeof constant); // Output: string
}

{
    // 3. Loops

    // • Create a for loop to print numbers from 1 to 10.
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
    // Output: 1 2 3 4 5 6 7 8 9 10

    // • Create a while loop to count down from 10 to 1.
    let count = 10;
    while (count >= 1) {
        console.log(count);
        count--;
    }
    // Output: 10 9 8 7 6 5 4 3 2 1

    // • Use a for...of loop to iterate over an array of names.
    const names = ["Alice", "Bob", "Charlie"];
    for (const name of names) {
        console.log(name);
    }
    // Output:
    // Alice
    // Bob
    // Charlie
}

{
    // 4. Arrays

    // • Create an array with 5 elements and log it.
    const array = [1, 2, 3, 4, 5];
    console.log(array);
    // Output: [1, 2, 3, 4, 5]

    // • Add a new element to the end of an array (.push()).
    array.push(6);
    console.log(array);
    // Output: [1, 2, 3, 4, 5, 6]

    // • Remove the last element from an array (.pop()).
    array.pop();
    console.log(array);
    // Output: [1, 2, 3, 4, 5]

    // • Iterate over an array and print each element.
    for (const num of array) {
        console.log(num);
    }
    // Output:
    // 1
    // 2
    // 3
    // 4
    // 5

    // • Find the length of an array.
    console.log(array.length);
    // Output: 5
}

{
    // 5. Functions

    // • Create a function to add two numbers and return the result.
    function add(a, b) {
        return a + b;
    }
    console.log(add(3, 4));
    // Output: 7

    // • Write a function that accepts a string and returns its uppercase version.
    function toUpperCase(str) {
        return str.toUpperCase();
    }
    console.log(toUpperCase("hello"));
    // Output: HELLO

    // • Create a function to calculate the area of a rectangle.
    function rectangleArea(length, width) {
        return length * width;
    }
    console.log(rectangleArea(5, 3));
    // Output: 15
}

{
    // 6. Conditionals

    // • Write an if statement to check if a number is positive or negative.
    const num = -5;
    if (num > 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
    // Output: Negative

    // • Use if...else if to classify a grade as “A”, “B”, or “Fail”.
    const grade = 85;
    if (grade >= 90) {
        console.log("A");
    } else if (grade >= 70) {
        console.log("B");
    } else {
        console.log("Fail");
    }
    // Output: B

    // • Create a switch case for selecting a fruit price.
    const fruit = "apple";
    switch (fruit) {
        case "apple":
            console.log("Price: $1");
            break;
        case "banana":
            console.log("Price: $0.5");
            break;
        default:
            console.log("Price not available");
    }
    // Output: Price: $1
}

// {7. Object Basics}
{
    // • Create an object to store information about a car (e.g., make, model, year).
    const car = {
        make: "Toyota",
        model: "Corolla",
        year: 2020,
    };

    // • Access and log the value of a property using dot notation.
    console.log(car.model); // Output: "Corolla"

    // • Add a new property to an existing object.
    car.color = "Red";
    console.log(car);
    // Output: { make: "Toyota", model: "Corolla", year: 2020, color: "Red" }
}

// {8. String Manipulation}
{
    // • Concatenate two strings.
    const firstName = "John";
    const lastName = "Doe";
    const fullName = firstName + " " + lastName;
    console.log(fullName); // Output: "John Doe"

    // • Extract the first 5 characters of a string (.slice()).
    const text = "JavaScript";
    const firstFive = text.slice(0, 5);
    console.log(firstFive); // Output: "JavaS"

    // • Replace a word in a string using .replace().
    const sentence = "I like apples.";
    const newSentence = sentence.replace("apples", "bananas");
    console.log(newSentence); // Output: "I like bananas."
}

// {9. Event Handling (Basic DOM Interaction)}
// {
//     // These require HTML for demonstration.
//     // Example with JavaScript assuming you have HTML elements with corresponding IDs.

//     // • Create a button and log a message when it is clicked.
//     document.getElementById("myButton").addEventListener("click", () => {
//         console.log("Button clicked!"); // Output: "Button clicked!"
//     });

//     // • Change the background color of a div on a mouseover event.
//     document.getElementById("myDiv").addEventListener("mouseover", () => {
//         document.getElementById("myDiv").style.backgroundColor = "lightblue";
//     });

//     // • Toggle a class on an element when it is clicked.
//     document.getElementById("myElement").addEventListener("click", () => {
//         document.getElementById("myElement").classList.toggle("active");
//     });
// }

// {10. Range-Based Tasks}
{
    // • Print all even numbers between 1 and 20.
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
    // Output: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

    // • Calculate the sum of all numbers from 1 to 100.
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum += i;
    }
    console.log(sum); // Output: 5050

    // • Create a range of numbers as an array and iterate over it.
    const range = Array.from({ length: 10 }, (_, index) => index + 1);
    range.forEach((num) => console.log(num));
    // Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

// {11. Filtering and Mapping Arrays}
{
    const numbers = [1, 4, 9, 12, 15, 18, 22, 25];

    // • Filter out all numbers greater than 10 from an array.
    const filteredNumbers = numbers.filter((num) => num <= 10);
    console.log(filteredNumbers); // Output: [1, 4, 9]

    // • Transform an array of numbers into their squares (.map()).
    const squaredNumbers = numbers.map((num) => num * num);
    console.log(squaredNumbers); // Output: [1, 16, 81, 144, 225, 324, 484, 625]

    // • Find the first number greater than 5 in an array.
    const firstGreaterThanFive = numbers.find((num) => num > 5);
    console.log(firstGreaterThanFive); // Output: 9
}

// {12. Object and Array Interaction}
{
    const people = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 22 },
        { name: "Charlie", age: 30 },
    ];

    // • Loop through an array of objects and log a specific property from each object.
    people.forEach((person) => console.log(person.name));
    // Output: "Alice", "Bob", "Charlie"

    // • Add a new key-value pair to each object in an array of objects.
    const updatedPeople = people.map((person) => ({ ...person, active: true }));
    console.log(updatedPeople);
    // Output: [{ name: "Alice", age: 25, active: true }, ...]

    // • Sort an array of objects by a property (e.g., age).
    const sortedPeople = [...people].sort((a, b) => a.age - b.age);
    console.log(sortedPeople);
    // Output: [{ name: "Bob", age: 22 }, { name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]
}

// {13. Working with Dates}
{
    // • Get the current date and log it.
    const currentDate = new Date();
    console.log(currentDate); // Output: Current date and time.

    // • Format a date into DD/MM/YYYY format.
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    console.log(formattedDate); // Example Output: "15/1/2025"

    // • Calculate the difference in days between two dates.
    const date1 = new Date("2025-01-01");
    const date2 = new Date("2025-01-15");
    const diffInDays = (date2 - date1) / (1000 * 60 * 60 * 24);
    console.log(diffInDays); // Output: 14
}
// {14. User Input Handling}
{
    // • Create a // to take the user’s name and log it.
    const name = "kunal" ////("What is your name?");
    console.log(`Hello, ${name}!`); // Example Output: "Hello, Kunal!"

    // • Ask the user for two numbers and log their sum.
    const num1 = 12.5 //parseInt(//("Enter the first number:"));
    const num2 = 13 //parseInt(//("Enter the second number:"));
    const sum = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is ${sum}.`);
    // Example Output: "The sum of 5 and 10 is 15."

    // • Validate that the user enters a number.
    const input = 23 //prompt("Enter a number:");
    if (isNaN(input)) {
        console.log("That's not a valid number.");
    } else {
        console.log(`You entered a valid number: ${input}`);
    }
}

// {15. Asynchronous Tasks}
{
    // • Log “Start”, then use setTimeout() to log “After 2 seconds”.
    console.log("Start");
    setTimeout(() => {
        console.log("After 2 seconds");
    }, 2000);
    // Output: "Start", then after 2 seconds, "After 2 seconds"

    // • Fetch data from a mock API and log it.
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((data) => console.log(data));
    // Output: Data from the API

    // • Use async/await to fetch user data.
    async function fetchData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const userData = await response.json();
        console.log(userData);
    }
    fetchData();
    // Output: User data from the API
}

// {16. Error Handling}
{
    // • Write a try...catch block to handle division by zero.
    try {
        const numerator = 10;
        const denominator = 0;
        if (denominator === 0) throw new Error("Cannot divide by zero");
        console.log(numerator / denominator);
    } catch (error) {
        console.error(error.message); // Output: "Cannot divide by zero"
    }

    // • Throw a custom error if a value is not a number.
    function checkIfNumber(value) {
        if (typeof value !== "number") {
            throw new Error("Value is not a number");
        }
        return true;
    }
    try {
        checkIfNumber("abc");
    } catch (error) {
        console.error(error.message); // Output: "Value is not a number"
    }

    // • Catch an error when parsing invalid JSON.
    try {
        const json = '{"name": "John"'; // Missing closing brace
        const parsedData = JSON.parse(json);
        console.log(parsedData);
    } catch (error) {
        console.error("Invalid JSON:", error.message);
    }
}

// {17. Array Search and Calculation}
{
    const array = [3, 5, 7, 5, 3, 9, 3];

    // • Find the index of a specific value in an array.
    const index = array.indexOf(7);
    console.log(index); // Output: 2

    // • Count how many times a specific value appears in an array.
    const count = array.filter((num) => num === 3).length;
    console.log(count); // Output: 3

    // • Check if an array contains a particular value.
    const hasValue = array.includes(9);
    console.log(hasValue); // Output: true
}

// {18. Pattern Recognition}
{
    // • Print a right triangle pattern using nested loops.
    const rows = 4;
    for (let i = 1; i <= rows; i++) {
        console.log("*".repeat(i));
    }
    // Output:
    // *
    // **
    // ***
    // ****

    // • Create a checkerboard pattern for an n x n grid.
    const n = 4;
    let checkerboard = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            checkerboard += (i + j) % 2 === 0 ? "#" : " ";
        }
        checkerboard += "\n";
    }
    console.log(checkerboard);
    // Example Output for n = 4:
    // # # 
    //  # #
    // # #
    //  # #

    // • Count the occurrences of each character in a string.
    const str = "hello world";
    const charCount = {};
    for (const char of str.replace(/\s+/g, "")) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    console.log(charCount);
    // Output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
}

// {19. Basic Algorithms}
{
    // • Reverse a string without using .reverse().
    const reverseString = (str) => {
        let reversed = "";
        for (const char of str) {
            reversed = char + reversed;
        }
        return reversed;
    };
    console.log(reverseString("hello")); // Output: "olleh"

    // • Find the largest number in an array.
    const nums = [10, 5, 8, 20, 15];
    const maxNum = Math.max(...nums);
    console.log(maxNum); // Output: 20

    // • Check if a string is a palindrome.
    const isPalindrome = (str) => {
        const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
        return cleaned === cleaned.split("").reverse().join("");
    };
    console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
}
