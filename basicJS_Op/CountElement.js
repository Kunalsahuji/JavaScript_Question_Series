// Count each unique element in an array and return an object with the counts
{
    let arr = [1, 2, 3, 1, 2, 3, 1, 2, 3]
    let countObj = arr.reduce((accumulator, current) => {
        accumulator[current] = (accumulator[current] || 0) + 1;
        return accumulator;
    }, {});
    console.log(`Count of each element: `, countObj);
}
{
    let arr = [1, 2, 3, 1, 2, 3, 1, 2, 3]
    let countObj = {};
    for (let num of arr) {
        if (countObj[num]) {
            countObj[num]++;
        } else {
            countObj[num] = 1;
        }
    }
    console.log(`Count of each element: `, countObj);
}
{
    let arr = [1, 2, 3, 1, 2, 3, 1, 2, 3]
    let countObj = {};
    arr.forEach(num => {
        if (countObj[num]) {
            countObj[num]++;
        } else {
            countObj[num] = 1;
        }
    }
    );
    console.log(`Count of each element: `, countObj);
}
{
    let arr = [1, 2, 3, 1, 2, 3, 1, 2, 3]
    let counts = {}
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i]
        if (counts[value] === undefined) {
            counts[value] = 1;
        } else {
            counts[value]++;
        }
    }
    console.log(`Count of each element: `, counts);
}
