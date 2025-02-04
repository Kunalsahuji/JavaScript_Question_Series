// Write a function that takes a string and returns the reversed string using a for loop.
{
    function reverseString(str) {
        let reversed = "";
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i]
        }
        return reversed;
    }
    console.log(reverseString("hello")); // Output: "olleh"
}

// Filter Even Numbers:
// Write a function that takes an array of numbers and returns a new array containing only the even numbers using forEach.
{
    function evenArray(arr) {
        let evenNum = []
        arr.forEach((even) => {
            if (even % 2 === 0) {
                evenNum.push(even)
                console.log(even)
            }

        })
        return evenNum
    }
    let array = evenArray([1, 2, 34, 5, 67, 8])
    console.log(array) // [2, 34, 8]

}


// Write a function that takes a number and prints whether it is divisible by 3, 5, or both using if-else.

{
    function checkDiv(n) {
        if (n % 3 === 0 && n % 5 === 0) {
            console.log(`${n} is divisible by both 3 & 5`);
        } else if (n % 3 === 0) {
            console.log(`${n} is divisible by 3`);
        } else if (n % 5 === 0) {
            console.log(`${n} is divisible by 5`);
        } else {
            console.log(`${n} is not divisible by 3 or 5`);
        }
    }
    checkDiv(15) // 15 is divisible by both 3 & 5
}


// Nested If-Else for Age Group:
// Write a function that takes an age and prints the age group ("child", "teenager", "adult", "senior") 
// based on the age using nested if-else.
{


    function getAgeGroup(age) {
        if (age < 0) {
            console.log("Invalid age");
        } else if (age <= 12) {
            console.log("Child");
        } else if (age <= 19) {
            console.log("Teenager");
        } else if (age <= 64) {
            console.log("Adult");
        } else {
            console.log("Senior");
        }
    }

    getAgeGroup(18) //teenager
    getAgeGroup(25); // adult
    getAgeGroup(90); // senior
    getAgeGroup(12); //child

}


// Filter and Double Even Numbers:
// Write a function that takes an array of numbers, filters out the odd numbers, and returns a
// new array where the even numbers are doubled using filter and map.


{
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    function evenAndDouble(arr) {
        let evenDouble = arr.filter(even => even % 2 === 0).map(double => double * 2)
        return evenDouble
    }

    const result = evenAndDouble(numbers)
    console.log(result) // [ 4, 8, 12, 16, 20 ]
}

// Reverse string
// Write a function that takes a string and returns the reversed string using a for loop.

{
    function reverseString(str) {
        let reverse = ""
        for (let i = str.length - 1; i >= 0; i--) {
            reverse += str[i]
        }
        return reverse
    }
    let string1 = reverseString("kunal")
    console.log(string1) // 'lanuk'
}


