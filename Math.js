// WAP to find the square root of the given number.
{
    let num = 25;
    console.log(`The square root of ${num} is ${Math.sqrt(num)}`);
    // In the above example, we have used the Math.sqrt() method to find the square root of the given number. The Math.sqrt() method is used to find the square root of the given number. It returns the square root of the number. If the number is negative, it returns NaN (Not a Number).
}
// via without Math method
{
    let num1 = 25;
    let squareRoot = num1 ** 0.5;
    console.log(`The square root of ${num1} is ${squareRoot}`);
}
// WAP to find the cube root of the given number
{
    let num = 270;
    console.log(`The cube root of ${num} is ${Math.cbrt(num)}`);
    // In the above example, we have used the Math.cbrt() method to find the cube root of the given number. The Math.cbrt() method is used to find the cube root of the given number. It returns the cube root of the number. If the number is negative, it returns NaN (Not a Number).
}
// via without Math method
{
    let num1 = 270;
    let cubeRoot = num1 ** (1 / 3);
    console.log(`The cube root of ${num1} is ${cubeRoot}`);
}
// WAP to find the power of given number
{
    let num = 5;
    let power = 3;
    console.log(`The power of ${num} to the ${power} is ${Math.pow(num, power)}`);
    // In the above example, we have used the Math.pow() method to find the power of the given number. The Math.pow() method is used to find the power of the given number. It returns the power of the number. If the number is negative, it returns NaN (Not a Number).
}
// via without Math method

{
    let num1 = 5;
    let power = 4;
    // let result = 1;
    // for (let i = 0; i < power; i++) {
    //     result *= num1;
    // }
    console.log(`The power of ${num1} to the ${power} is ${num1 ** power}`);
}
// WAP to find the absolute value of the given number

{
    let num = -10;
    console.log(`The absolute value of ${num} is ${Math.abs(num)}`);
    // In the above example, we have used the Math.abs() method to find the absolute value of the given number. The Math.abs() method is used to find the absolute value of the given number. It returns the absolute value of the number.
}
// via without Math method
{
    let num1 = -10;
    let absoluteValue = num1 < 0 ? -num1 : num1;
    console.log(`The absolute value of ${num1} is ${absoluteValue}`);
    // In the above example, we have used a ternary operator to find the absolute value of the given number. The ternary operator is used to check if the number is less than 0. If it is, the negative value of the number is returned. Otherwise, the positive value of the number is returned.
}
