/*Find the max number of an array Find Maximum Number
Given an array:
[12, 45, 67, 23, 89, 5]
return the largest number in the array.
*/
{
    let arr = [12, 45, 67, 23, 89, 5];
    let maxNum = Math.max(...arr)
    console.log(maxNum);
    // Output: 89
}
{
    let arr = [12, 45, 67, 23, 89, 5];
    function findMax(arr) {
        return Math.max(...arr);
    }
    console.log(findMax(arr));
    // Output: 89
}
{
    let arr = [12, 45, 67, 23, 89, 5];
    let max = arr[0]
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
    // Output: 89
}