// Find the length of the longest subarray where the difference between the maximum and minimum elements is at most 1
// or Picking Numbers with a Difference of at Most 1
//  or Harmonious Subarray Problem 

function pickingNumbers(nums) {
    let freq = {}
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }
    let maxLen = 0
    for (let key in freq) {
        let number = Number(key)
        let currentLen = freq[number] + (freq[number + 1] || 0)
        maxLen = Math.max(maxLen, currentLen)
    }
    return maxLen;
}
// Example usage:
console.log(pickingNumbers([4, 6, 5, 3, 3, 1])); // Output: 3
console.log(pickingNumbers([1, 2, 2, 3, 1, 2])); // Output: 5
console.log(pickingNumbers([1, 1, 2, 2, 3, 3])); // Output: 4
console.log(pickingNumbers([1, 2, 3, 4, 5])); // Output: 2
console.log(pickingNumbers([1, 1, 1, 1, 1])); // Output: 5
console.log(pickingNumbers([1, 2, 3, 4, 5, 6])); // Output: 2