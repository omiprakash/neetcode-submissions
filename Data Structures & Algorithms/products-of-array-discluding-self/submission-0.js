class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let productArray = []
        let leftProduct = 1
        for(let i=0; i< nums.length; i++) {
            productArray[i] = leftProduct
            leftProduct *= nums[i]
        }
        let rightProduct = 1
        for(let j= nums.length-1; j >= 0; j--) {
            productArray[j] *= rightProduct;
            rightProduct *= nums[j]
        }
        return productArray
    }
}
