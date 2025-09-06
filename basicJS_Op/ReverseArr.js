/*
You have an array of numbers:
let arr = [1, 2, 3, 4, 5];
Reverse the array without using reverse() method.
*/
{
    let arr = [1, 2, 3, 4, 5];
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i])
    }
    console.log(`Reversed Array: [${reversedArr}]`);
}
// using unshift
{
    let arr = [1, 2, 3, 4, 5];
    let reversedArr = [];
    for (let i = 0; i < arr.length; i++) {
        reversedArr.unshift(arr[i]);
    }
    console.log(`Reversed Array: [${reversedArr}]`);
}
// using reduce
{
    let arr = [1, 2, 3, 4, 5];
    let reversedArr = arr.reduce((acc, curr) => [curr, ...acc], []);
    console.log(`Reversed Array: [${reversedArr}]`);
}
// using recursion
{
    function reverseArray(arr) {
        if (arr.length === 0) return [];
        return [arr[arr.length - 1], ...reverseArray(arr.slice(0, arr.length - 1))];
    }
    let arr = [1, 2, 3, 4, 5];
    let reversedArr = reverseArray(arr);
    console.log(`Reversed Array: [${reversedArr}]`);
}
// using stack approach
{
    let arr = [1, 2, 3, 4, 5];
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i]);
    }
    let reversedArr = [];
    while (stack.length > 0) {
        reversedArr.push(stack.pop());
    }
    console.log(`Reversed Array: [${reversedArr}]`);
}
// using two-pointer technique
{
    let arr = [1, 2, 3, 4, 5];
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        // Swap elements
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    console.log(`Reversed Array: [${arr}]`);
}
// using map and pop
{
    let arr = [1, 2, 3, 4, 5];
    let tempArr = [...arr]; // Create a copy of the original array
    let reversedArr = arr.map(() => tempArr.pop());
    console.log(`Reversed Array: [${reversedArr}]`);
}
// using for..of and unshift
{
    let arr = [1, 2, 3, 4, 5];
    let reversedArr = [];
    for (let num of arr) {
        reversedArr.unshift(num);
    }
    console.log(`Reversed Array: [${reversedArr}]`);
}
// using forEach and unshift
{
    let arr = [1, 2, 3, 4, 5];
    let reversedArr = [];
    arr.forEach(num => reversedArr.unshift(num));
    console.log(`Reversed Array: [${reversedArr}]`);
}
// using while loop and pop
{
    let arr = [1, 2, 3, 4, 5];
    let tempArr = [...arr]; // Create a copy of the original array
    let reversedArr = [];
    while (tempArr.length > 0) {
        reversedArr.push(tempArr.pop());
    }
    console.log(`Reversed Array: [${reversedArr}]`);
}