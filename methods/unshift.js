/*
6. unshift():
The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. And this method changes original array by adding new element(s) at the beginning of the array.
*/

// Example 1: Basic Usage of unshift()
{
    const numbers = [2, 3, 4]
    const newLength = numbers.unshift(1)
    console.log(newLength) // Output: 4
    console.log(numbers) // Output: [1, 2, 3, 4]
}

/*👉 Important:
- The unshift() method modifies the original array.
- It returns the new length of the array.
*/

// Example 2: Using unshift() with Strings
{
    let bikes = ['Honda', 'Suzuki']
    const newLength = bikes.unshift('Yamaha')
    console.log(newLength) // Output: 3
    console.log(bikes) // Output: ['Yamaha', 'Honda', 'Suzuki']
}

// Example 3: Using unshift() with Arrays of Objects
{
    const users = [
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
    ]
    const newLength = users.unshift({ id: 1, name: 'Alice' })
    console.log(newLength) // Output: 3
    console.log(JSON.stringify(users)) // Output: [{"id":1,"name":"Alice"},{"id":2,"name":"Bob"},{"id":3,"name":"Charlie"}]
}

// Example 4: Using unshift() in a Loop
{
    const numbers = [4, 5, 6]
    for (let i = 3; i >= 1; i--) {
        const newLength = numbers.unshift(i)
        console.log(`Added ${i}, New length: ${newLength}, Array: ${numbers}`)
    }
    // Output:
    // Added 3, New length: 4, Array: 3,4,5,6
    // Added 2, New length: 5, Array: 2,3,4,5,6
    // Added 1, New length: 6, Array: 1,2,3,4,5,6
}

// Example 5: Using unshift() with Multiple Elements
{
    const numbers = [4, 5, 6]
    const newLength = numbers.unshift(1, 2, 3)
    console.log(newLength) // Output: 6
    console.log(numbers) // Output: [1, 2, 3, 4, 5, 6]
}

// Example 6: Using unshift() on an Empty Array
{
    const emptyArray = []
    const newLength = emptyArray.unshift(1, 2, 3)
    console.log(newLength) // Output: 3
    console.log(emptyArray) // Output: [1, 2, 3]
}