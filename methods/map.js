/*
🔹 What is map() in JavaScript?
✅ Definition : map() is an array method that creates a new array by applying a function to each element of the original array.

🧠 Simple Hinglish Explanation

map() ka use tab hota hai jab tumhe array ke har element par same operation perform karke ek naya array banana ho.

👉 Important:

Original array change ❌ nahi hota
New array return hota hai ✅
*/

// Example 1: Basic Usage of map()
{
    const numbers = [1, 2, 3, 4, 5]
    const double = numbers.map(num => num * 2)
    console.log(`Double of ${numbers} = ${double}`) // Output: Double of 1,2,3,4,5 = 2,4,6,8,10
}
// Example 2: Using map() with Objects
{
    const users = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 }
    ]

    const names = users.map(user => user.name)
    console.log(`Names of users: ${names}`) // Output: Names of users: Alice,Bob
}


// Example 3: Using map() with Arrow Functions
{
    const numbers = [1, 2, 3, 4, 5]
    const squares = numbers.map(num => num ** 2)
    console.log(`Squares of ${numbers} = ${squares}`) // Output: Squares of 1,2,3,4,5 = 1,4,9,16,25

}

// Example 4: Using map() with Index
{
    const numbers = [10, 20, 30, 40]
    const indexedNumbers = numbers.map((num, index) => `${index}: ${num}`)
    console.log(`Indexed numbers: ${indexedNumbers}`) // Output: Indexed numbers: 0: 10,1: 20,2: 30,3: 40
}

// Example 5: Using map() to Extract Data from an Array of Objects
{
    const products = [
        { id: 1, name: 'Laptop', price: 1000 },
        { id: 2, name: 'Phone', price: 500 }
    ]
    const productNames = products.map(product => product.name)
    console.log(`Product names: ${productNames}`) // Output: Product names: Laptop,Phone
}

// Example 6: Using map() to Create a New Array of Objects
{
    const numbers = [1, 2, 3]
    const numberObjects = numbers.map(num => ({ value: num }))
    console.log(`Number objects: ${JSON.stringify(numberObjects)}`) // Output: Number objects: [{"value":1},{"value":2},{"value":3}]
}

// Example 7: Using map() with Conditional Logic
{
    const numbers = [1, 2, 3, 4, 5]
    const evenOdd = numbers.map(num => num % 2 === 0 ? 'Even' : 'Odd')
    console.log(`Even or Odd: ${evenOdd}`) // Output: Even or Odd: Odd,Even,Odd,Even,Odd
}