class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        nums = [...numSet]; // less iterations required, doesn't need to look at duplicates
        let max = 0;
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            if (!numSet.has(nums[i] - 1)) {
                count++;
                let active = nums[i] + 1;
                while (numSet.has(active)) {
                    count++;
                    active++;
                }
                max = Math.max(count, max);
                count = 0;
            }
        }
        return max;
    }
}
