// Reverse a number
{
    let n = 1234
    temp = n
    reverese = 0
    while (n > 0) {
        reverese = reverese * 10 + n % 10
        n = Math.floor(n / 10)
    }
    console.log(`Reverse of ${temp} = ${reverese}`)
}
