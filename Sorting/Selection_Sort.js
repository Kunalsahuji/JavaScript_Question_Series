// Selection Sort:

function Selection_Sort(n, arr) {
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

let n = parseInt(prompt("Enter the number:"))

let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(parseInt(prompt("Enter the element:")));
}

console.log("Original Array: ", arr);
console.log("Sorted Array: ", Selection_Sort(n, arr));
