class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if(nums.length === 1) {
            return [nums[0]]
        }
        let map = new Map();
        for (const num of nums) {
            if (map.has(num)) {
                map.set(num, map.get(num) + 1);
            } else {
                map.set(num, 1);
            }
        }
         return [...map.entries()]
        .sort((a, b) => b[1] - a[1]) // sort by frequency
        .slice(0, k)
        .map(x => x[0]);
    }
}
