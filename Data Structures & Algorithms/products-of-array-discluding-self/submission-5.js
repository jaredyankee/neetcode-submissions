class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        if (nums.includes(0)) {
            if (nums.slice(nums.indexOf(0)+1).includes(0)) {
                return nums.map(n => 0);
            }
        }
        let productWithoutZero = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                if (productWithoutZero == 0) {
                    productWithoutZero = nums[i];
                } else {
                    productWithoutZero = productWithoutZero * nums[i];
                }
            }
        }
        if (nums.includes(0)) {
            return nums.map(n => n == 0 ? productWithoutZero : 0);
        } else {
            return nums.map(n => productWithoutZero / n);
        }
    }
}
