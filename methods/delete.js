/*
    7. delete():
    Array elements can be deleted using the JS delete operator. However, using delete on an array element does not change the length of the array or shift the remaining elements. Instead, it leaves a hole in the array, resulting in an undefined value at that index.

    👉 Important:
    - The delete operator removes the element but does not affect the length of the array.
    - The deleted element will be replaced with undefined, creating a hole in the array.
    - It is generally recommended to use methods like splice() for removing elements from an array, as they adjust the length and shift elements accordingly.

*/

// Example 1: Basic Usage of delete()
{
    const numbers = [1, 2, 3, 4, 5]
    delete numbers[2] // Deletes the element at index 2 (value 3)
    console.log(numbers) // Output: [1, 2, undefined, 4, 5]
    console.log(numbers.length) // Output: 5
}

// Example 2: Using delete() on an Array of Objects
{
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
    ]
    delete users[1] // Deletes the element at index 1 (object with id 2)
    console.log(users) // Output: [{ id: 1, name: 'Alice' }, undefined, { id: 3, name: 'Charlie' }]
    console.log(users.length) // Output: 3
}

// Example 3: Using delete() in a Loop
{
    const numbers = [1, 2, 3, 4, 5] 
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) { // Delete even numbers
            delete numbers[i]
        }
    }
    console.log(numbers) // Output: [1, undefined, 3, undefined, 5]
}

// Example 4: Using delete() on an Empty Array
{
    const emptyArray = []
    delete emptyArray[0] // Attempts to delete an element from an empty array
    console.log(emptyArray) // Output: []
    console.log(emptyArray.length) // Output: 0
}

// Example 5: Using delete() with Multiple Elements
{
    const numbers = [1, 2, 3, 4, 5] 
    delete numbers[0] // Deletes the element at index 0 (value 1)
    delete numbers[3] // Deletes the element at index 3 (value 4)
    console.log(numbers) // Output: [undefined, 2, 3, undefined, 5]
    console.log(numbers.length) // Output: 5
}