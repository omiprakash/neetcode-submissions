class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        // ["Hello", "World"]
        let encode = ''
        for (let str of strs) {
            encode += str.length + '#' + str
        }
        return encode
        // "5#Hello5#World"
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // "5#Hello5#World"
        let result = [];
        let i = 0;
        while (i < str.length) {
            let j = i
            while(str[j] != '#') {
                j++;
            }
            let length = parseInt(str.substring(i,j))
            let word = str.substring(j+1, j+1+length)
            result.push(word)
            i = j+1+length
        }
        return result

    }
}
