// WAP to check Divisibility of a number by another number.
let num = 11 //parseInt(prompt("Enter a number: "))
let divisor = 2 //parseInt(prompt("Enter a divisor: "))

if (num % divisor === 0) {
    console.log(`${num} is divisible by ${divisor}`);
} else {
    console.log(`${num} is not divisible by ${divisor}`)
    console.log(`Remainder is ${num % divisor}`)
};