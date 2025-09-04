/*
Filter Even Numbers. From this array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
return a new array containing only even numbers.
*/
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let evenArr = arr.filter(num => num % 2 === 0);
    console.log(evenArr); // Output: [2, 4, 6, 8]
}
// with for loop

{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            console.log(arr[i]);
            // Output: 2 4 6 8
        }
    }
}
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let evenArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenArr.push(arr[i]);
        }
    }
    console.log(evenArr); // Output: [2, 4, 6, 8]
}
// with for of loop
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    let evenArr = [];
    for (let num of arr) {
        if (num % 2 == 0) {
            evenArr.push(num);
        }
    }
    console.log(evenArr); // Output: [2, 4, 6, 8]
}
// with forEach loop
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let evenArr = [];
    arr.forEach(num => {
        if (num % 2 == 0) {
            evenArr.push(num);
        }
    });
    console.log(evenArr); // Output: [2, 4, 6, 8]
}
// with while loop
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let evenArr = [];
    let i = 0;
    while (i < arr.length) {
        if (arr[i] % 2 == 0) {
            evenArr.push(arr[i]);
        }
        i++;
    }
    console.log(evenArr); // Output: [2, 4, 6, 8]
}