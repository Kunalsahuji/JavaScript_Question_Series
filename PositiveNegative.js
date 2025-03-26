// Write a program to check the given number is positive or negative.
let num = 0 //parseInt(prompt("Enter a number: "))
if (num > 0) {
    console.log(`${num} is a positive number.`)
} else if (num < 0) {
    console.log(`${num} is a negative number.`)
} else if (num == 0) {
    console.log(`You entered 0.`)
} else {
    console.log("Invalid input. Please enter a number.")
}