class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let dup = nums
        return [...nums, ...dup]
    }
}
