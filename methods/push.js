/* 4. push():
The push() method adds one or more elements to the end of an array and returns the new length of the array. And this method changes original array by adding new element(s) at the end of the array.

array.push(element1, element2, ..., elementN) //syntax
*/

// Example 1: Basic Usage of push()
{
    const numbers = [1, 2, 3]
    const newLength = numbers.push(4, 5)
    console.log(`New length: ${newLength}`) // Output: New length: 5
    console.log(`Array after push(): ${numbers}`) // Output: Array after push(): 1,2,3,4,5
}

// Example 2: Using push() with Strings
{
    let bikes = ['yamaha', 'suzuki', 'honda', 'bajaj', 'tvs']
    let addBike = bikes.push('ducati', 'royal Enfield')
    console.log(`New length: ${addBike}`) // Output: New length: 7
    console.log(`Array after push(): ${bikes}`) // Output: Array after push(): yamaha,suzuki,honda,bajaj,tvs,ducati,royal Enfield
}

/*👉 Important:
    - The push() method modifies the original array by adding new elements at the end.
    - It returns the new length of the array.
*/

// Example 3: Using push() with Arrays of Objects
{
    const users = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 }
    ]
    const newUser = { name: 'Charlie', age: 35 }
    const newLength = users.push(newUser)
    console.log(`New length: ${newLength}`) // Output: New length: 3
    console.log(`Array after push(): ${JSON.stringify(users)}`) // Output: Array after push(): [{"name":"Alice","age":25},{"name":"Bob","age":30},{"name":"Charlie","age":35}]
}

// Example 4: Using push() in a Loop
{
    const numbers = [1, 2, 3]
    for (let i = 4; i <= 6; i++) {
        const newLength = numbers.push(i)
        console.log(`Added ${i}, New length: ${newLength}, Array: ${numbers}`)
    }
    // Output:
    // Added 4, New length: 4, Array: 1,2,3,4
    // Added 5, New length: 5, Array: 1,2,3,4,5
    // Added 6, New length: 6, Array: 1,2,3,4,5,6
}