// Selection Sort:
{
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

    // Testing the Selection Sort function
    let n = parseInt(prompt("Enter the number:"))

    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(parseInt(prompt("Enter the element:")));
    }

    console.log("Original Array: ", arr);
    console.log("Sorted Array: ", Selection_Sort(n, arr));
}
// Bubble Sort:
{
    function Bubble_Sort(n, arr) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }

    // Testing the Bubble Sort function
    let n = parseInt(prompt("Enter the number:"))

    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(parseInt(prompt("Enter the element:")));
    }

    console.log("Original Array: ", arr);
    console.log("Sorted Array: ", Bubble_Sort(n, arr));
}

// Insertion Sort:
{
    function Insertion_Sort(n, arr) {
        for (let i = 1; i < n; i++) {
            let key = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
        return arr;
    }

    // Testing the Insertion Sort function
    let n = parseInt(prompt("Enter the number:"))

    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(parseInt(prompt("Enter the element:")));
    }

    console.log("Original Array: ", arr);
    console.log("Sorted Array: ", Insertion_Sort(n, arr));
}

// Merge Sort:
{
    function merge(left, right) {
        let result = [];
        let indexLeft = 0;
        let indexRight = 0;

        while (indexLeft < left.length && indexRight < right.length) {
            if (left[indexLeft] < right[indexRight]) {
                result.push(left[indexLeft]);
                indexLeft++;
            } else {
                result.push(right[indexRight]);
                indexRight++;
            }
        }

        return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
    }

    function mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        let mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        return merge(mergeSort(left), mergeSort(right));
    }

    // Testing the Merge Sort function
    let n = parseInt(prompt("Enter the number:"))

    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(parseInt(prompt("Enter the element:")));
    }

    console.log("Original Array: ", arr);
    console.log("Sorted Array: ", mergeSort(arr));
}
// Quick Sort:
{
    function quickSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }

        let pivot = arr[arr.length - 1];
        let left = [];
        let right = [];

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }

        return [...quickSort(left), pivot, ...quickSort(right)];
    }

    // Testing the Quick Sort function
    let n = parseInt(prompt("Enter the number:"))

    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(parseInt(prompt("Enter the element:")));
    }

    console.log("Original Array: ", arr);
    console.log("Sorted Array: ", quickSort(arr));
}
// Heap Sort:
{
    function heapSort(arr) {
        let n = arr.length;

        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }

        for (let i = n - 1; i > 0; i--) {
            let temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;

            heapify(arr, i, 0);
        }

        return arr;
    }

    function heapify(arr, n, i) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }
        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }
        if (largest != i) {
            let temp = arr[i];
            arr[i] = arr[largest];
            arr[largest] = temp;

            heapify(arr, n, largest);
        }
    }

    // Testing the Heap Sort function
    let n = parseInt(prompt("Enter the number:"))

    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(parseInt(prompt("Enter the element:")));
    }

    console.log("Original Array: ", arr);
    console.log("Sorted Array: ", heapSort(arr));
}
// Radix Sort:

{
    function getMax(arr) {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }

    function countingSort(arr, exp) {
        let output = new Array(arr.length).fill(0);
        let count = new Array(10).fill(0);
        for (let i = 0; i < arr.length; i++) {
            count[(arr[i] / exp) % 10]++;
        }
        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }
        for (let i = arr.length - 1; i >= 0; i--) {
            output[count[(arr[i] / exp) % 10] - 1] = arr[i];
            count[(arr[i] / exp) % 10]--;
        }
        for (let i = 0; i < arr.length; i++) {
            arr[i] = output[i];
        }
    }

    function radixSort(arr) {
        let max = getMax(arr);
        for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
            countingSort(arr, exp);
        }
        return arr;
    }

    // Testing the Radix Sort function
    let n = parseInt(prompt("Enter the number:"))

    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(parseInt(prompt("Enter the element:")));
    }

    console.log("Original Array: ", arr);
    console.log("Sorted Array: ", radixSort(arr));
}

// Bucket Sort:
{
    function bucketSort(arr, n) {
        let bucket = new Array(n);
        for (let i = 0; i < n; i++) {
            bucket[i] = [];
        }
        for (let i = 0; i < arr.length; i++) {
            let index = Math.floor(n * arr[i]);
            bucket[index].push(arr[i]);
        }
        for (let i = 0; i < n; i++) {
            bucket[i].sort((a, b) => a - b);
        }
        let result = [];
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < bucket[i].length; j++) {
                result.push(bucket[i][j]);
            }
        }
        return result;
    }

    // Testing the Bucket Sort function
    let n = parseInt(prompt("Enter the number:"))

    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(parseFloat(prompt("Enter the element:")));
    }

    console.log("Original Array: ", arr);
    console.log("Sorted Array: ", bucketSort(arr, n));
}

// Shell Sort:
{
    function shellSort(arr) {
        let n = arr.length;
        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < n; i++) {
                let temp = arr[i];
                let j;
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                    arr[j] = arr[j - gap];
                }
                arr[j] = temp;
            }
        }
        return arr;
    }

    // Testing the Shell Sort function
    let n = parseInt(prompt("Enter the number:"))

    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(parseFloat(prompt("Enter the element:")));
    }

    console.log("Original Array: ", arr);
    console.log("Sorted Array: ", shellSort(arr));
}

// Bubble Sort:
{
    function Bubble_Sort(n, arr) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }

    // Testing the Bubble Sort function
    let n = parseInt(prompt("Enter the number:"))

    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(parseInt(prompt("Enter the element:")));
    }

    console.log("Original Array: ", arr);
    console.log("Sorted Array: ", Bubble_Sort(n, arr));
}

