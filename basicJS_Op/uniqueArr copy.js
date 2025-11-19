/*
You have an array of numbers:
let numbers = ["Aman", "Riya", "Kunal", "Aman", "Riya"];
Remove the duplicates and create a new array with unique numbers only.
*/
{
    let numbers = [1, 2, 3, 1, 2];
    let uniqueNumbers = [...new Set(numbers)]
    console.log(`Unique Numbers: `, uniqueNumbers);
}
{
    let numbers = [1, 2, 3, 1, 2];
    let uniqueNumbers = numbers.filter((num, index) => numbers.indexOf(num) === index);
    console.log(`Unique Numbers: `, uniqueNumbers);
}
{
    let numbers = [1, 2, 3, 1, 2];
    let uniqueNumbers = [];
    for (let num of numbers) {
        if (!uniqueNumbers.includes(num)) {
            uniqueNumbers.push(num);
        }

    }
    console.log(`Unique Numbers: `, uniqueNumbers);
}
{
    let numbers = [1, 2, 3, 1, 2];
    let uniqueNumbers = numbers.reduce((accumulator, current) => {
        if (!accumulator.includes(current)) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);
    console.log(`Unique Numbers: `, uniqueNumbers);
}
{
    let numbers = [1, 2, 3, 1, 2];
    let uniqueNumbers = [];
    numbers.forEach(num => {
        if (!uniqueNumbers.includes(num)) {
            uniqueNumbers.push(num);
        }
    });
    console.log(`Unique Numbers: `, uniqueNumbers);
}
{
    let numbers = [1, 2, 3, 1, 2];
    let uniqueNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (!uniqueNumbers.includes(numbers[i])) {
            uniqueNumbers.push(numbers[i]);
        }
    }
    console.log(`Unique Numbers: `, uniqueNumbers);
}