/*
3. pop():
The pop() method removes that last element of an array and returns the removed element. 
And this method changes original array by removing the last element.

*/

// Example 1: Basic Usage of pop()
{
    const numbers = [1, 2, 3, 4, 5]
    const lastElement = numbers.pop()
    console.log(`Removed element: ${lastElement}`) // Output: Removed element: 5
    console.log(`Array after pop(): ${numbers}`) // Output: Array after pop(): 1,2,3,4
}
/*👉 Important:
    - The pop() method modifies the original array by removing the last element.
    - It returns the removed element.
*/
// Example 2: Using pop() on an Empty Array
{
    const emptyArray = []
    const removedElement = emptyArray.pop()
    console.log(`Removed element from empty array: ${removedElement}`) // Output: Removed element from empty array: undefined
    console.log(`Array after pop(): ${emptyArray}`) // Output: Array after pop(): 
}
// Example 3: Using pop() in a Loop
{
    const numbers = [1, 2, 3, 4, 5]
    while (numbers.length > 0) {
        const removed = numbers.pop()
        console.log(`Removed: ${removed}, Remaining array: ${numbers}`)
    }
    // Output:
    // Removed: 5, Remaining array: 1,2,3,4
    // Removed: 4, Remaining array: 1,2,3
    // Removed: 3, Remaining array: 1,2
    // Removed: 2, Remaining array: 1
    // Removed: 1, Remaining array: 
}

// Example 4: Using pop() with Arrays of Strings
{
    let bikes = ['Yamaha', 'Honda', 'Suzuki']
    console.log(`Original array: ${bikes}`) // Output: Original array: Yamaha,Honda,Suzuki
    const removedBike = bikes.pop()
    console.log(`Removed bike: ${removedBike}`) // Output: Removed bike: Suzuki
    console.log(`Array after pop(): ${bikes}`) // Output: Array after pop(): Yamaha,Honda
}