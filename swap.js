// Swap 2 numbers using third variable: (A-1)
{
    let a = parseInt(prompt("Enter first number: "));
    let b = parseInt(prompt("Enter second number: "));
    let temp = a;
    a = b;
    b = temp;
    console.log(`a = ${a}, b = ${b}`);
}

// Swap 2 numbers without using third variable: (A-2)
{
    let a = parseInt(prompt("Enter first number: "));
    let b = parseInt(prompt("Enter second number: "));
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(`a = ${a}, b = ${b}`);
}

// Swap 2 numbers without using third variable and arithmetic operator: (A-3)
{
    let a = parseInt(prompt("Enter first number: "));
    let b = parseInt(prompt("Enter second number: "));
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    console.log(`a = ${a}, b = ${b}`);
}

// Swap 2 numbers without using third variable and arithmetic operator (Using destructuring): (A-4)
{
    let a = parseInt(prompt("Enter first number: "));
    let b = parseInt(prompt("Enter second number: "));
    [a, b] = [b, a];
    console.log(`a = ${a}, b = ${b}`);
}

// Swap 3 numbers without using extra variables: (A-5)
{
    let a = parseInt(prompt("Enter first number: "));
    let b = parseInt(prompt("Enter second number: "));
    let c = parseInt(prompt("Enter third number: "));
    a = a + b + c;
    b = a - (b + c);
    c = a - (b + c);
    a = a - (b + c);
    console.log(`a = ${a}, b = ${b}, c = ${c}`);
}

// Swap 3 numbers without using extra variable and arithmetic operator: (A-6)
{
    let a = parseInt(prompt("Enter first number: "));
    let b = parseInt(prompt("Enter second number: "));
    let c = parseInt(prompt("Enter third number: "));
    a = a ^ b ^ c;
    b = a ^ b ^ c;
    c = a ^ b ^ c;
    a = a ^ b ^ c;
    console.log(`a = ${a}, b = ${b}, c = ${c}`);
}
