class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (nums.length == 1)
            return false;
        
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums.slice(i+1).includes(nums[i]))
                return true;
        }
        return false;
    }
}
