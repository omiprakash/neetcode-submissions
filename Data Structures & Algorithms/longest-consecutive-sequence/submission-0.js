class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let longestCount = 0
        for(let num of nums) {
            if(!set.has(num-1)) {
                let currentNum = num;
                let count = 0
                while(set.has(currentNum)) {
                    currentNum++
                    count++
                }
                longestCount = Math.max(longestCount, count)

            }
        }
        return longestCount
    }
}
