/*2. join():
The join() returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. And it does not change the original array.
*/
// Example 1: Basic Usage of join()
{
    const numbers = [1, 2, 3, 4, 5]
    const str = numbers.join()
    console.log(`Joined string of ${numbers} = ${str}`) // Output: Joined string of 1,2,3,4,5 = 1,2,3,4,5
}
/*👉 Important:
    - The join() method does not modify the original array.
    - It returns a string with all elements concatenated and separated by the specified delimiter (or commas if no delimiter is provided).
*/