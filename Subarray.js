// Given an integer array nums, return the length of the longest subarray 
// where the difference between the maximum and minimum elements is at most 1.

{
    function longestElement(nums) {
        let maxLength = 0;

        for (let start = 0; start < nums.length; start++) {
            let min = nums[start];
            let max = nums[start];
            for (let end = start; end < nums.length; end++) {
                min = Math.min(min, nums[end]);
                max = Math.max(max, nums[end]);
                if (max - min <= 1) {
                    maxLength = Math.max(maxLength, end - start + 1);
                } else {
                    break;
                }
            }
        }
        return maxLength;
    }

    let nums = [1, 2, 2, 3, 1, 2];
    console.log(longestElement(nums)); // Output: 5
}
