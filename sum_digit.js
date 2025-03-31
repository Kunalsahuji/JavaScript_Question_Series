// WAP to find sum of digit

// via for loop : 
{
    let n = 123
    let sum = 0
    for (let i = 1; i = n; i++) {
        sum += n % 10
        n = Math.floor(n / 10)
    }
    console.log(sum)
}

//  via while loop :
{
    let n = 123
    let sum = 0
    for (let i = 1; i = n; i++) {
        sum += n % 10
        n = Math.floor(n / 10)
    }
    console.log(sum)
}