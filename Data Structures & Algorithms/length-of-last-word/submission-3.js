class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let words = [];
        let word = "";
        for (let i = s.length - 1; i >= 0; i--) {
            if (s[i] !== " ") {
                word += s[i];
            } else if (word.length > 0) {
                words.push(word);
                word = "";
            }
        }
        if (word.length > 0) {
            words.push(word);
        }
        return words[0].length
    }
}
