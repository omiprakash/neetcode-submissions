class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);

        // Build initial frequency arrays
        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 97]++;
            s2Count[s2.charCodeAt(i) - 97]++;
        }

        // Count initial matches
        let matches = 0;

        for (let i = 0; i < 26; i++) {
            if (s1Count[i] === s2Count[i]) {
                matches++;
            }
        }

        let left = 0;

        // Sliding window
        for (let right = s1.length; right < s2.length; right++) {
            // If all 26 chars match
            if (matches === 26) return true;

            // Add new character
            let index = s2.charCodeAt(right) - 97;
            s2Count[index]++;

            // Update matches after adding
            if (s1Count[index] === s2Count[index]) {
                matches++;
            } else if (s1Count[index] + 1 === s2Count[index]) {
                matches--;
            }

            // Remove left character
            index = s2.charCodeAt(left) - 97;
            s2Count[index]--;

            // Update matches after removing
            if (s1Count[index] === s2Count[index]) {
                matches++;
            } else if (s1Count[index] - 1 === s2Count[index]) {
                matches--;
            }

            left++;
        }

        return matches === 26;
    }
}
