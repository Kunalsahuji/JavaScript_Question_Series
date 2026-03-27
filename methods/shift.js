/*
5. shift():
The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

*/

// Example 1: Basic Usage of shift()
{
    const numbers = [1, 2, 3, 4, 5]
    const firstNumber = numbers.shift()
    console.log(firstNumber) // Output: 1
    console.log(numbers) // Output: [2, 3, 4, 5]
}

/*👉 Important:
- The shift() method modifies the original array.
- If the array is empty, shift() returns undefined.
*/

// Example 2: Using shift() on an Empty Array
{
    const emptyArray = []
    const removedElement = emptyArray.shift()
    console.log(removedElement) // Output: undefined
    console.log(emptyArray) // Output: []
}

// Example 3: Using shift() in a Loop
{
    const numbers = [1, 2, 3, 4, 5]
    while (numbers.length > 0) {
        const removed = numbers.shift()
        console.log(`Removed: ${removed}, Remaining array: ${numbers}`)
    }
    // Output:
    // Removed: 1, Remaining array: 2,3,4,5
    // Removed: 2, Remaining array: 3,4,5
    // Removed: 3, Remaining array: 4,5
    // Removed: 4, Remaining array: 5
    // Removed: 5, Remaining array: 
}

// Example 4: Using shift() with Arrays of Strings
{
    let bikes = ['Yamaha', 'Honda', 'Suzuki']
    console.log(`Original array: ${bikes}`) // Output: Original array: Yamaha,Honda,Suzuki
    const removedBike = bikes.shift()
    console.log(`Removed bike: ${removedBike}`) // Output: Removed bike: Yamaha
    console.log(`Array after shift(): ${bikes}`) // Output: Array after shift(): Honda,Suzuki
}

// Example 5: Using shift() with Arrays of Objects
{
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
    ]
    console.log(`Original array: ${JSON.stringify(users)}`) // Output: Original array: [{"id":1,"name":"Alice"},{"id":2,"name":"Bob"},{"id":3,"name":"Charlie"}]
    const removedUser = users.shift()
    console.log(`Removed user: ${JSON.stringify(removedUser)}`) // Output: Removed user: {"id":1,"name":"Alice"}
    console.log(`Array after shift(): ${JSON.stringify(users)}`) // Output: Array after shift(): [{"id":2,"name":"Bob"},{"id":3,"name":"Charlie"}]
}

// Example 6: Using shift() with Arrays of Mixed Data Types
{
    const mixedArray = [1, 'two', { id: 3 }, [4, 5]]
    console.log(`Original array: ${JSON.stringify(mixedArray)}`) // Output: Original array: [1,"two",{"id":3},[4,5]]
    const removedElement = mixedArray.shift()
    console.log(`Removed element: ${JSON.stringify(removedElement)}`) // Output: Removed element: 1
    console.log(`Array after shift(): ${JSON.stringify(mixedArray)}`) // Output: Array after shift(): ["two",{"id":3},[4,5]]
}