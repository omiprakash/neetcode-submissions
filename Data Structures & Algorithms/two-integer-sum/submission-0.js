class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()
        for(let num in nums) {
            if(map.has(target - nums[num])) {
                return [map.get(target - nums[num]), Number(num)]
            } else {
                map.set((nums[num]),Number(num))
            }
        }
    }
}
