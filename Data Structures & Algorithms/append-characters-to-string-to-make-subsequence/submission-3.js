class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let i = 0;
        let j = 0;
        while( i < t.length && j < s.length) {
            if(t[i] === s[j]) {
                i++
            }
            j++
        }
        if(i < t.length) {
            return t.length - i
        } 
        return 0
     }
}
