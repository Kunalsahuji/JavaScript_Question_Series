// Move all zeros in an array to the end, while keeping the order of non-zero elements.

{
    function moveZeros(arr) {
        let pos = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0) {
                arr[pos] = arr[i]
                pos++
            }
        }
        while (pos < arr.length) {
            arr[pos] = 0
            pos++
        }
        return arr
    }

    // Example usage:
    console.log(moveZeros([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
    console.log(moveZeros([0,0,1,2,1,0,2])) // Output: [1, 2, 1, 2, 0, 0, 0]
}
