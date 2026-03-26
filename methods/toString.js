/*1. toString():
    The toString() Returns a string with array values separated by commas. And it does not change the original array. 
    And it does not change the original array. 
*/
// Example 1: Basic Usage of toString()
{
    const numbers = [1, 2, 3, 4, 5]
    const str = numbers.toString()
    console.log(`String representation of ${numbers} = ${str}`) // Output: String representation of 1,2,3,4,5 = 1,2,3,4,5
}

/*👉 Important:
    - The toString() method does not modify the original array.
    - It returns a string with all elements separated by commas.
*/
{
    const fruits = ['Apple', 'Banana', 'Cherry']
    const str = fruits.toString()
    console.log(`String representation of ${fruits} = ${str}`) // Output: String representation of Apple,Banana,Cherry = Apple,Banana,Cherry
    console.log(`Original array: ${fruits}`) // Output: Original array: Apple,Banana,Cherry
}