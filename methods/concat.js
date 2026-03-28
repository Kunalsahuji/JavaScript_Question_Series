/*
 8. concat():
    The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
*/

// Example 1: Basic Usage of concat()
{
    const array1 = [1, 2, 3]
    const array2 = [4, 5, 6]
    const mergedArray = array1.concat(array2)
    console.log(mergedArray) // Output: [1, 2, 3, 4, 5, 6]
    console.log(array1) // Output: [1, 2, 3] (original array remains unchanged)
    console.log(array2) // Output: [4, 5, 6] (original array remains unchanged)
}

/*👉 Important:
- The concat() method does not modify the existing arrays.
- It creates a new array that contains all the elements from the arrays passed as arguments.
- If an argument passed to concat() is not an array, it will be added as a single element to the new array.
*/

// Example 2: Using concat() with Multiple Arrays
{
    const array1 = [1, 2]
    const array2 = [3, 4]
    const array3 = [5, 6]
    const mergedArray = array1.concat(array2, array3)
    console.log(mergedArray) // Output: [1, 2, 3, 4, 5, 6]
}

// Example 3: Using concat() with Non-Array Values
{
    const array1 = [1, 2]
    const mergedArray = array1.concat(3, 4, 'hello')
    console.log(mergedArray) // Output: [1, 2, 3, 4, 'hello']
}

// Example 4: Using concat() with Empty Arrays
{
    const array1 = [1, 2, 3]
    const emptyArray = []
    const mergedArray = array1.concat(emptyArray)
    console.log(mergedArray) // Output: [1, 2, 3]
    console.log(emptyArray) // Output: [] (original empty array remains unchanged)
}

// Example 5: Using concat() with Arrays of Objects
{
    const users1 = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
    ]
    const users2 = [
        { id: 3, name: 'Charlie' },
        { id: 4, name: 'David' }
    ]
    const mergedUsers = users1.concat(users2)
    console.log(mergedUsers) // Output: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }, { id: 4, name: 'David' }]
}

// Example 6: Using concat() with Nested Arrays
{
    const array1 = [1, 2]
    const array2 = [[3, 4], [5, 6]]
    const mergedArray = array1.concat(array2)
    console.log(mergedArray) // Output: [1, 2, [3, 4], [5, 6]]
}