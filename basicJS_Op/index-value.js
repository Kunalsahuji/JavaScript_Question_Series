/*
You have an array:
let arr = [10, 20, 30, 40, 50];
Convert it into:
[ {index: 0, value: 10}, {index: 1, value: 20}, ... ]
*/
{
    let arr = [10, 20, 30, 40, 50];
    let result = arr.map((value, index) => { return { index: index, value: value } });
    console.log(result);
}

// with for loop
{
    let arr = [10, 20, 30, 40, 50];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push({ index: i, value: arr[i] });
    }
    console.log(result);
}
// with forEach
{
    let arr = [10, 20, 30, 40, 50];
    let result = [];
    arr.forEach((value, index) => {
        result.push({ index: index, value: value });
    });
    console.log(result);
}
// with reduce
{
    let arr = [10, 20, 30, 40, 50];
    let result = arr.reduce((acc, value, index) => {
        acc.push({ index: index, value: value });
        return acc;
    }, []);
    console.log(result);
}
// with for..of and entries()
{
    let arr = [10, 20, 30, 40, 50];
    let result = [];
    for (const [index, value] of arr.entries()) {
        result.push({ index: index, value: value });
    }
    console.log(result);
}
// with Array.from()
{
    let arr = [10, 20, 30, 40, 50];
    let result = Array.from(arr, (value, index) => ({ index: index, value: value }));
    console.log(result);
}