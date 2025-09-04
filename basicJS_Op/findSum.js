/*
    Find the sum of an array of numbers
    Input: [2, 4, 6, 8]
    Output: 20
*/
{
    let arr = [2, 4, 6, 8];
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
    // Output: 20
}
{
    function sumArray(arr) {
        return arr.reduce((acc, curr) => acc + curr, 0);
    }
    let arr = [2, 4, 6, 8];
    console.log(sumArray(arr));
    // Output: 20
}