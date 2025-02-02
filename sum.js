//  take a input from the user n. and find out the enter numbers sum

// via formula:
{
    let n = 10 //parseInt(prompt("Enter a number: "))
    let sum = n * (n + 1) / 2
    console.log(`The sum of numbers from 1 to ${n} is ${sum}.`)
}
// via for loop: 
{
    let n = 10 //parseInt(prompt("Enter a number: "))
    let sum = 0
    let temp = n
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    console.log(`The sum of numbers from 1 to ${temp} is ${sum}.`)
}

// via while loop:
{
    let n = 10 //parseInt(prompt("Enter a number: "))
    let sum = 0
    let temp = n
    while (n > 0) {
        sum += n
        n--
    }
    console.log(`The sum of numbers from 1 to ${temp} is ${sum}.`)
}
// via recursion:
{
    let temp = 10 //parseInt(prompt("Enter a number: "))
    function sum(n) {
        if (n === 1) {
            return 1
        } else {
            return n + sum(n - 1)
        }
    }
    console.log(`The sum of numbers from 1 to ${temp} is ${sum(temp)}.`)
}
// via reduce method:
{
    let temp = 10 //parseInt(prompt("Enter a number: "))
    let arr = []
    for (let i = 1; i <= temp; i++) {
        arr.push(i)
    }
    let sum = arr.reduce((acc, curr) => acc + curr)
    console.log(`The sum of numbers from 1 to ${temp} is ${sum}.`)
}
// via arrow function:
{
    let temp = 10 //parseInt(prompt("Enter a number: "))
    let sum = (n) => {
        let sum = 0
        for (let i = 1; i <= n; i++) {
            sum += i
        }
        return sum
    }
    console.log(`The sum of numbers from 1 to ${temp} is ${sum(temp)}.`)
}
// via IIFE:
{
    let temp = 10 //parseInt(prompt("Enter a number: "))
    let sum = (function (n) {
        let sum = 0
        for (let i = 1; i <= n; i++) {
            sum += i
        }
        return sum
    })(temp)
    console.log(`The sum of numbers from 1 to ${temp} is ${sum}.`)
}
// via ES6:
{
    let temp = 10 //parseInt(prompt("Enter a number: "))
    let sum = Array.from({ length: temp }, (v, i) => i + 1).reduce((acc, curr) => acc + curr)
    console.log(`The sum of numbers from 1 to ${temp} is ${sum}.`)
}
// via ES6:
{
    let temp = 10 //parseInt(prompt("Enter a number: "))
    let sum = [...Array(temp + 1)].reduce((acc, curr, i) => acc + i, 0)
    console.log(`The sum of numbers from 1 to ${temp} is ${sum}.`)
}
