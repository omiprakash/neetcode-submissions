class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        // Always binary search on smaller array
        if (nums1.length > nums2.length) {
            return this.findMedianSortedArrays(nums2, nums1);
        }

        let x = nums1.length;
        let y = nums2.length;

        let low = 0;
        let high = x;

        while (low <= high) {
            let partitionX = Math.floor((low + high) / 2);

            let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

            let maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];

            let minRightX = partitionX === x ? Infinity : nums1[partitionX];

            let maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];

            let minRightY = partitionY === y ? Infinity : nums2[partitionY];

            // Correct partition
            if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
                // Odd length
                if ((x + y) % 2 === 1) {
                    return Math.max(maxLeftX, maxLeftY);
                }

                // Even length
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            }

            // Move left
            else if (maxLeftX > minRightY) {
                high = partitionX - 1;
            }

            // Move right
            else {
                low = partitionX + 1;
            }
        }
    }
}
