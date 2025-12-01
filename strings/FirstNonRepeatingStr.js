/*Find the first non-repeating character in a string.”
Example:
Input: "aabbcdeff"
Output: "c"
(→ because c is the first character that appears only once)
*/


{
    function firstNonRepeatingCharacter(str) {
        const charCount = {};
        for (let char of str) {
            charCount[char] = (charCount[char] || 0) + 1;
        }
        for (let char of str) {
            if (charCount[char] === 1) {
                return char;
            }
        }
        return null; // Return null if there is no non-repeating character

    }
    console.log(firstNonRepeatingCharacter("aabbcdeff")); // Output: "c"

    // Additional test cases
    console.log(firstNonRepeatingCharacter("swiss")); // Output: "w"
    console.log(firstNonRepeatingCharacter("aabbcc")); // Output: null  
    
}

