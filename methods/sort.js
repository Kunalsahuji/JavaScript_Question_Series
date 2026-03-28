/*
 9. sort():
 The sort() sorts the elements of an array and overwrite the original array. 
 Sorts the elements as strings in alphabetical and ascending order.
 
 array.sort([compareFunction]) //syntax
*/

// Example 1: Sorting an array of strings
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();
    console.log(fruits); // Output: [ 'Apple', 'Banana', 'Mango', 'Orange' ]
}

// Example 2: Sorting an array of numbers
{
    const numbers = [40, 100, 1, 5, 25, 10];
    numbers.sort();
    console.log(numbers); // Output: [ 1, 10, 100, 25, 40, 5 ]
}

// Example 3: Sorting an array of numbers in ascending order using a compare function
{
    const numbers = [40, 100, 1, 5, 25, 10];
    numbers.sort((a, b) => a - b);
    console.log(numbers); // Output: [ 1, 5, 10, 25, 40, 100 ]
}

// Example 4: Sorting an array of numbers in descending order using a compare function
{
    const numbers = [40, 100, 1, 5, 25, 10];
    numbers.sort((a, b) => b - a);
    console.log(numbers); // Output: [ 100, 40, 25, 10, 5, 1 ]
}

// Example 5: Sorting an array of objects based on a property
{
    const items = [
        { name: "John", age: 30 },
        { name: "Jane", age: 25 },
        { name: "Doe", age: 35 }
    ];
    items.sort((a, b) => a.age - b.age);
    console.log(items); // Output: [ { name: "Jane", age: 25 }, { name: "John", age: 30 }, { name: "Doe", age: 35 } ]
}

// Example 6: Sorting an array of strings in reverse order
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort().reverse();
    console.log(fruits); // Output: [ 'Orange', 'Mango', 'Banana', 'Apple' ]
}

// Example 7: Sorting an array of strings in case-insensitive manner
{
    const fruits = ["banana", "Orange", "apple", "Mango"];
    fruits.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    console.log(fruits); // Output: [ 'apple', 'banana', 'Mango', 'Orange' ]
}
