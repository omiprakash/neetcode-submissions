class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
         let loweredCase = s.toLowerCase();
    let str = '';

    for (let i = 0; i < loweredCase.length; i++) {

        let code = loweredCase.charCodeAt(i);

        if (
            (code >= 97 && code <= 122) ||
            (code >= 48 && code <= 57)
        ) {
            str += loweredCase[i];
        }
    }

    let start = 0;
    let end = str.length - 1;

    while (start < end) {

        if (str[start] !== str[end]) {
            return false;
        }

        start++;
        end--;
    }

    return true;

    }
}
