class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return "";

    const need = new Map();

    // Build frequency map for t
    for (const ch of t) {
        need.set(ch, (need.get(ch) || 0) + 1);
    }

    let left = 0;
    let matched = 0;

    let minLen = Infinity;
    let start = 0;

    const windowMap = new Map();

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // Add current char to window
        windowMap.set(char, (windowMap.get(char) || 0) + 1);

        // Check if character requirement satisfied
        if (
            need.has(char) &&
            windowMap.get(char) === need.get(char)
        ) {
            matched++;
        }

        // Shrink window while valid
        while (matched === need.size) {
            const windowSize = right - left + 1;

            // Update minimum window
            if (windowSize < minLen) {
                minLen = windowSize;
                start = left;
            }

            const leftChar = s[left];

            // Remove left char from window
            windowMap.set(leftChar, windowMap.get(leftChar) - 1);

            // Window becomes invalid
            if (
                need.has(leftChar) &&
                windowMap.get(leftChar) < need.get(leftChar)
            ) {
                matched--;
            }

            left++;
        }
    }

    return minLen === Infinity
        ? ""
        : s.substring(start, start + minLen);
    }
}
