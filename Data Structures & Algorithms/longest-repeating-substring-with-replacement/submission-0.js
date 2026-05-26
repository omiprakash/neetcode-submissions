class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
         let left = 0;
    let maxFreq = 0;
    let maxLength = 0;

    const count = new Map();

    for (let right = 0; right < s.length; right++) {
        // Add current character
        const char = s[right];
        count.set(char, (count.get(char) || 0) + 1);

        // Track highest frequency character in current window
        maxFreq = Math.max(maxFreq, count.get(char));

        // If replacements needed > k, shrink window
        while ((right - left + 1) - maxFreq > k) {
            count.set(s[left], count.get(s[left]) - 1);
            left++;
        }

        // Update answer
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
    }
}
