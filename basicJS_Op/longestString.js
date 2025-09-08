/*  
Given an array:
let str = ["apple", "banana", "grapes", "mango"];
Find the longest string in the array. if have multiple longest strings, print all of them.
*/
{
    let str = ["apple", "banana", "grapes", "mango"]
    let maxLength = str.reduce((acc, curr) => curr.length > acc.length ? curr : acc)
    let longestString = str.filter(word => word.length === maxLength.length)
    console.log(longestString)
}
// Using a for loop
{
    let str = ["apple", "banana", "grapes", "mango"];
    let maxLength = 0;
    let longestStrings = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > maxLength) {
            maxLength = str[i].length;
            longestStrings = [str[i]];
        } else if (str[i].length === maxLength) {
            longestStrings.push(str[i]);
        }
    }
    console.log(longestStrings);
}
// Using forEach
{
    let str = ["apple", "banana", "grapes", "mango"];
    let maxLength = 0;
    let longestStrings = [];
    str.forEach(word => {
        if (word.length > maxLength) {
            maxLength = word.length;
            longestStrings = [word];
        } else if (word.length === maxLength) {
            longestStrings.push(word);
        }
    });
    console.log(longestStrings);
}
// Using reduce
{
    let str = ["apple", "banana", "grapes", "mango"];
    let maxLength = str.reduce((acc, curr) => curr.length > acc.length ? curr : acc, "");
    let longestStrings = str.filter(word => word.length === maxLength.length);
    console.log(longestStrings);
}       
// Using sort
{
    let str = ["apple", "banana", "grapes", "mango"];
    str.sort((a, b) => b.length - a.length);
    let maxLength = str[0].length;
    let longestStrings = str.filter(word => word.length === maxLength);
    console.log(longestStrings);
}
// Using a while loop
{
    let str = ["apple", "banana", "grapes", "mango"];
    let maxLength = 0;
    let longestStrings = [];
    let i = 0;
    while (i < str.length) {
        if (str[i].length > maxLength) {
            maxLength = str[i].length;
            longestStrings = [str[i]];
        } else if (str[i].length === maxLength) {
            longestStrings.push(str[i]);
        }
        i++;
    }
    console.log(longestStrings);
}