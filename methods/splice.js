/*
 10. splice():
    The splice() method adds and/or removes array elements.
    The splice() method overwrites the original array.
    array.splice(start, deleteCount, item1, item2, ...)
*/

// Example 1: Removing elements from an array
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 1);
    console.log(fruits); // Output: [ 'Banana', 'Orange', 'Mango' ]
}

// Example 2: Adding elements to an array
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 0, "Lemon", "Kiwi");
    console.log(fruits); // Output: [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]
}

// Example 3: Replacing elements in an array
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(1, 2, "Lemon", "Kiwi");
    console.log(fruits); // Output: [ 'Banana', 'Lemon', 'Kiwi', 'Mango' ]
}

// Example 4: Removing elements from an array using negative index  
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(-2, 1, "Lemon", "Kiwi");
    console.log(fruits); // Output: [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango' ]
}

// Example 5: Adding elements to an array using negative index
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(-1, 0, "Lemon", "Kiwi");
    console.log(fruits); // Output: [ 'Banana', 'Orange', 'Apple', 'Lemon', 'Kiwi', 'Mango' ]
}

// Example 6: Replacing elements in an array using negative index
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(-2, 2, "Lemon", "Kiwi");
    console.log(fruits); // Output: [ 'Banana', 'Orange', 'Lemon', 'Kiwi' ]
}

// Example 7: Removing all elements from an array
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];  
    fruits.splice(0, fruits.length);
    console.log(fruits); // Output: []
}