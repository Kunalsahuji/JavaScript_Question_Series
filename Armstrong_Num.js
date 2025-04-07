// Armstrong Number: A number is said to be an Armstrong number if the sum its digit each raised to power of the number of digits is equal to the number itself. For example: 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153. 
// 9474 is also an Armstrong number because 9^4 + 4^4 + 7^4 + 4^4 = 9474.
// 1634 is also an Armstrong number because 1^4 + 6^4 + 3^4 + 4^4 = 1634.
// 8208 is also an Armstrong number because 8^4 + 2^4 + 0^4 + 8^4 = 8208.
// 9474 is also an Armstrong number because 9^4 + 4^4 + 7^4 + 4^4 = 9474.

{
    n = 154
    let temp = n
    let count = 0
    while (n > 0) {
        n = Math.floor(n / 10)
        count++
    }
    let sum = 0
    let n1 = temp
    while (n1 > 0) {
        let rem = n1 % 10
        sum += (rem ** count)
        n1 = Math.floor(n1 / 10)
    }
    if (temp === sum) {
        console.log(`${temp} is an Armstrong number`)
    }
    else {
        console.log(`${temp} is not an Armstrong number`)
    }
}
// // Armstrong Number using recursion
{
    let n = 153  
    let temp = n
    let count = 0
    function countDigits(n) {
        if (n === 0) {
            return 0
        }
        return 1 + countDigits(Math.floor(n / 10))
    }
    count = countDigits(n)
    let sum = 0
    function isArmstrong(n) {
        if (n === 0) {   
            return 0
        }
        let rem = n % 10
        return (rem ** count) + isArmstrong(Math.floor(n / 10))
    }
    sum = isArmstrong(n)
    if (temp === sum) {
        console.log(`${temp} is an Armstrong number`)
    }
    else {
        console.log(`${temp} is not an Armstrong number`)
    }
}
// // Armstrong Number using recursion with closure
{
    let n = 153  
    let temp = n
    let count = 0
    function countDigits(n) {
        if (n === 0) {
            return 0
        }
        return 1 + countDigits(Math.floor(n / 10))
    }
    count = countDigits(n)
    let sum = 0
    function isArmstrong() {
        return function(n) {
            if (n === 0) {   
                return 0
            }
            let rem = n % 10
            return (rem ** count) + isArmstrong()(Math.floor(n / 10))
        }
    }
    sum = isArmstrong()(n)
    if (temp === sum) {
        console.log(`${temp} is an Armstrong number`)
    }
    else {
        console.log(`${temp} is not an Armstrong number`)
    }
}
// // Armstrong Number using recursion with closure and arrow function
{
    let n = 153  
    let temp = n
    let count = 0
    const countDigits = (n) => {
        if (n === 0) {
            return 0
        }
        return 1 + countDigits(Math.floor(n / 10))
    }
    count = countDigits(n)
    let sum = 0
    const isArmstrong = () => {
        return (n) => {
            if (n === 0) {   
                return 0
            }
            let rem = n % 10
            return (rem ** count) + isArmstrong()(Math.floor(n / 10))
        }
    }
    sum = isArmstrong()(n)
    if (temp === sum) {
        console.log(`${temp} is an Armstrong number`)
    }
    else {
        console.log(`${temp} is not an Armstrong number`)
    }
}