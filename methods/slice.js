/*
 11. slice():
    The slice() method slice out a piece of an array. It does not change the original array.
    it creates a new array.

    array.slice(start, end) //syntax

 */

// Example 1: Slicing an array of strings
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const citrus = fruits.slice(1, 3);
    console.log(citrus); // Output: [ 'Orange', 'Apple' ]
}

// Example 2: Slicing an array of numbers
{
    const numbers = [40, 100, 1, 5, 25, 10];
    const slicedNumbers = numbers.slice(2, 5);
    console.log(slicedNumbers); // Output: [ 1, 5, 25 ]
}

// Example 3: Slicing an array of objects
{
    const items = [
        { name: "John", age: 30 },
        { name: "Jane", age: 25 },
        { name: "Doe", age: 35 }
    ];
    const slicedItems = items.slice(0, 2);
    console.log(slicedItems); // Output: [ { name: "John", age: 30 }, { name: "Jane", age: 25 } ]
}

// Example 4: Slicing an array using negative index
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const slicedFruits = fruits.slice(-3, -1);
    console.log(slicedFruits); // Output: [ 'Orange', 'Apple' ]
}

// Example 5: Slicing an array without providing end index
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const slicedFruits = fruits.slice(2);
    console.log(slicedFruits); // Output: [ 'Apple', 'Mango' ]
}

// Example 6: Slicing an array without providing start index
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const slicedFruits = fruits.slice(0, 2);
    console.log(slicedFruits); // Output: [ 'Banana', 'Orange' ]
}

// Example 7: Slicing an array with start index greater than end index
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];  
    const slicedFruits = fruits.slice(3, 1);
    console.log(slicedFruits); // Output: []
}