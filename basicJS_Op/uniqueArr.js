/*
You have an array of names:
let names = ["Aman", "Riya", "Kunal", "Aman", "Riya"];
Remove the duplicates and create a new array with unique names only.
*/
{
    let names = ["Aman", "Riya", "Kunal", "Aman", "Riya"];
    let uniqueNames = [...new Set(names)];
    console.log(uniqueNames);
}
// with filter and indexOf
{
    let names = ["Aman", "Aman", "Riya", "Kunal", "Aman", "Riya"];
    let uniqueNames = names.filter((name, index) => names.indexOf(name) === index);
    console.log(uniqueNames);
}
// with for loop and includes
{
    let names = ["Aman", "Aman", "Riya", "Kunal", "Aman", "Riya"];
    let uniqueNames = [];
    for (let i = 0; i < names.length; i++) {
        if (!uniqueNames.includes(names[i])) {
            uniqueNames.push(names[i]);
        }
    }
    console.log(uniqueNames);
}
// with reduce
{
    let names = ["Aman", "Aman", "Riya", "Kunal", "Aman", "Riya"];
    let uniqueNames = names.reduce((accumulator, current) => {
        if (!accumulator.includes(current)) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);
    console.log(uniqueNames);
}
// with for..of loop and includes
{
    let names = ["Aman", "Aman", "Riya", "Kunal", "Aman", "Riya"];
    let uniqueNames = [];
    for (let name of names) {
        if (!uniqueNames.includes(name)) {
            uniqueNames.push(name);
        }
    }
    console.log(uniqueNames);
}
// with forEach and includes
{
    let names = ["Aman", "Aman", "Riya", "Kunal", "Aman", "Riya"];
    let uniqueNames = [];
    names.forEach(name => {
        if (!uniqueNames.includes(name)) {
            uniqueNames.push(name);
        }
    });
    console.log(uniqueNames);
}
// with while loop and includes
{
    let names = ["Aman", "Aman", "Riya", "Kunal", "Aman", "Riya"];
    let uniqueNames = [];
    let i = 0;
    while (i < names.length) {
        if (!uniqueNames.includes(names[i])) {
            uniqueNames.push(names[i]);
        }
        i++;
    }
    console.log(uniqueNames);
}