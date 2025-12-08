// “Given an array of integers, return true if the array contains any duplicates. Otherwise return false.”
{
    function containsDuplicate(nums) {
        let seen = new Set();

        for (let num of nums) {
            if (seen.has(num)) {
                return true;   // Duplicate found
            }
            seen.add(num);
        }

        return false; // No duplicates
    }
    let numbers = [1, 2, 3, 1];
    console.log(`Contains Duplicates: `, containsDuplicate(numbers));

}
{
    function containsDuplicate(nums) {
        nums.sort((a, b) => a - b); // Sort the array
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) {
                return true; // Duplicate found
            }
        }
        return false; // No duplicates
    }
    let numbers = [1, 2, 3, 4];
    console.log(`Contains Duplicates: `, containsDuplicate(numbers));
}