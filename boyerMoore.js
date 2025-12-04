// Given an array, find the majority element — the element that appears more than n/2 times.”

/*Example:
Input:
[2, 2, 1, 1, 1, 2, 2]
Output:
2
(because 2 appears 4 times, which is more than 7/2 = 3.5)
*/

{
    function findMajorityElement(arr) {
        let count = 0;
        let candidate;
        for (let num of arr) {
            if (count === 0) {
                candidate = num;
                count = 1;
            } else if (num === candidate) {
                count++;
            } else {
                count--;
            }
        }
        return candidate;
    }
    // Example usage:
    const inputArray = [2, 2, 1, 1, 1, 2, 2];
    const majorityElement = findMajorityElement(inputArray);
    console.log(majorityElement); // Output: 2
}