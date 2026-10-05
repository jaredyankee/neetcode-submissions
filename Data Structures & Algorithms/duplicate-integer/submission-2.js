class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (nums.length == 1)
            return false;
        
        if (nums.length == [...new Set(nums)].length)
            return false;
        return true;
    }
}
