// Palindrome Number : A number is said to be a Palindrome number if it is equal to its reverse. For example, 121, 12321, 1234321 are Palindrome numbers.
// Palindrome String : A string is said to be a Palindrome string if it is equal to its reverse. For example, "madam", "racecar", "level" are Palindrome strings.
// Palindrome Array : An array is said to be a Palindrome array if it is equal to its reverse. For example, [1, 2, 3, 2, 1], [1, 2, 3, 4, 5, 4, 3, 2, 1] are Palindrome arrays.
// Palindrome Object : An object is said to be a Palindrome object if it is equal to its reverse. For example, {a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3, d: 4} are Palindrome objects.
// Palindrome Function : A function is said to be a Palindrome function if it is equal to its reverse. For example, function f(x) { return x }, function f(x) { return x + 1 } are Palindrome functions.
// Palindrome Date : A date is said to be a Palindrome date if it is equal to its reverse. For example, 12/02/2021, 21/02/2021 are Palindrome dates.
// Palindrome Time : A time is said to be a Palindrome time if it is equal to its reverse. For example, 12:21, 21:12 are Palindrome times.
// Palindrome URL : A URL is said to be a Palindrome URL if it is equal to its reverse. For example, https://www.example.com, https://www.example.com/index.html are Palindrome URLs.

// Palindrome Number
{
    let n = 1234321
    temp = n
    reverese = 0
    while (n > 0) {
        reverese = reverese * 10 + n % 10
        n = Math.floor(n / 10)
    }
    if (temp === reverese) {
        console.log(`${temp} is a Palindrome number`)
    } else {
        console.log(`${temp} is not a Palindrome number`)
    }
}
// Palindrome String

{
    let str = "madam"
    // let reversedStr = str.split("").reverse().join("")
    let reversedStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i]
    }
    if (str === reversedStr) {
        console.log(`${str} is a Palindrome string`)
    } else {
        console.log(`${str} is not a Palindrome string`)
    }
}
// Palindrome Array
{
    let arr = [1, 2, 3, 2, 1]
    // let reversedArr = arr.reverse()
    let reversedArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i])
    }
    if (arr.toString() === reversedArr.toString()) {
        console.log(`${arr} is a Palindrome array`)
    } else {
        console.log(`${arr} is not a Palindrome array`)
    }
}

// Palindrome Object
{
    let obj = { a: 1, b: 2, c: 3 }
    // let reversedObj = Object.keys(obj).reverse().reduce((acc, key) => {
    //     acc[key] = obj[key]
    //     return acc
    // }, {})
    let reversedObj = {}
    let keys = Object.keys(obj).reverse()
    for (let i = 0; i < keys.length; i++) {
        reversedObj[keys[i]] = obj[keys[i]]
    }
    if (JSON.stringify(obj) === JSON.stringify(reversedObj)) {
        console.log(`${JSON.stringify(obj)} is a Palindrome object`)
    } else {
        console.log(`${JSON.stringify(obj)} is not a Palindrome object`)
    }
}

// Palindrome Function
{
    function f(x) {
        return x
    }
    function g(x) {
        return x + 1
    }
    if (f.toString() === g.toString()) {
        console.log(`f and g are Palindrome functions`)
    } else {
        console.log(`f and g are not Palindrome functions`)
    }
}
// Palindrome Date
{
    let date = "12/02/2021"
    // let reversedDate = date.split("/").reverse().join("/")
    let reversedDate = ""
    for (let i = date.length - 1; i >= 0; i--) {
        reversedDate += date[i]
    }

    if (date === reversedDate) {
        console.log(`${date} is a Palindrome date`)
    } else {
        console.log(`${date} is not a Palindrome date`)
    }
}
// Palindrome Time
{
    let time = "12:21"
    // let reversedTime = time.split(":").reverse().join(":")
    let reversedTime = ""
    for (let i = time.length - 1; i >= 0; i--) {
        reversedTime += time[i]
    }

    if (time === reversedTime) {
        console.log(`${time} is a Palindrome time`)
    } else {
        console.log(`${time} is not a Palindrome time`)
    }
}

// Palindrome URL
{
    let url = "https://www.example.com"
    // let reversedUrl = url.split("/").reverse().join("/")
    let reversedUrl = ""
    for (let i = url.length - 1; i >= 0; i--) {
        reversedUrl += url[i]
    }

    if (url === reversedUrl) {
        console.log(`${url} is a Palindrome URL`)
    } else {
        console.log(`${url} is not a Palindrome URL`)
    }
}

// Palindrome String with Unicode characters

{
    let str = "Madam"
    // let reversedStr = str.split("").reverse().join("")
    let reversedStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i]
    }
    if (str === reversedStr) {
        console.log(`${str} is a Palindrome string`)
    } else {
        console.log(`${str} is not a Palindrome string`)
    }
}

// Palindrome String with special characters

{
    let str = "Madam, in Eden, I'm Adam!"
    // let reversedStr = str.split("").reverse().join("")
    let reversedStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i]
    }
    if (str === reversedStr) {
        console.log(`${str} is a Palindrome string`)
    } else {
        console.log(`${str} is not a Palindrome string`)
    }
}

// Palindrome String with numbers
    
    {
        let str = "12321"
        // let reversedStr = str.split("").reverse().join("")
        let reversedStr = ""
        for (let i = str.length - 1; i >= 0; i--) {
            reversedStr += str[i]
        }
        if (str === reversedStr) {
            console.log(`${str} is a Palindrome string`)
        } else {
            console.log(`${str} is not a Palindrome string`)
        }
    }