// Find the Largest number between 2 numbers:
let a = 10 // parseInt(prompt("Enter 1st number: "))
let b = 20 // parseInt(prompt("Enter 2nd number: "))
console.log(`The largest number between ${a} and ${b} is ${a > b ? a : b}.`)
// via if-else:
{
    let a = 100 // parseInt(prompt("Enter 1st number: "))
    let b = 20 // parseInt(prompt("Enter 2nd number: "))
    if (a > b) {
        console.log(`The largest number between ${a} and ${b} is ${a}.`)
    } else {
        console.log(`The largest number between ${a} and ${b} is ${b}.`)
    }
}

// Find the Largest number between 3 numbers:
{
    let a = 100 // parseInt(prompt("Enter 1st number: "))
    let b = 200 // parseInt(prompt("Enter 2nd number: "))
    let c = 300 // parseInt(prompt("Enter 3rd number: "))
    let largest = a > b ? a : b
    largest = largest > c ? largest : c
    console.log(`The largest number between ${a}, ${b} and ${c} is ${largest}.`)
}
// via if-else:
{
    let a = 303 // parseInt(prompt("Enter 1st number: "))
    let b = 301 // parseInt(prompt("Enter 2nd number: "))
    let c = 302 // parseInt(prompt("Enter 3rd number: "))
    if (a >= b && a >= c) {
        console.log(`The largest number between ${a}, ${b} and ${c} is ${a}.`)
    }
    else if (b >= a && b >= c) {
        console.log(`The largest number between ${a}, ${b} and ${c} is ${b}.`)
    } else if (a == b && a == c) {
        console.log(`All numbers are equal.`)
    }
    else {
        console.log(`The largest number between ${a}, ${b} and ${c} is ${c}.`)
    }
}
// Find the Largest number between 4 numbers:
{
    let a = 100 // parseInt(prompt("Enter 1st number: "))
    let b = 200 // parseInt(prompt("Enter 2nd number: "))
    let c = 300 // parseInt(prompt("Enter 3rd number: "))
    let d = 400 // parseInt(prompt("Enter 4th number: "))
    let largest = a > b ? a : b
    largest = largest > c ? largest : c
    largest = largest > d ? largest : d
    console.log(`The largest number between ${a}, ${b}, ${c} and ${d} is ${largest}.`)
}

