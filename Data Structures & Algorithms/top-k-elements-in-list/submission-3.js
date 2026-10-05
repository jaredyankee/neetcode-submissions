class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        const buckets = [[]];
        // count occurences of each value and initialize buckets
        for (let i = 0; i < nums.length; i++) {
            buckets.push([]); // initialize buckets
            const num = nums[i];
            if (count.has(num)) 
                count.set(num, count.get(num) + 1); // increment in map
            else
                count.set(num, 1); // add to map
        }

        for (const num of count.keys()) {
            buckets[count.get(num)].push(num); 
        }

        const result = [];
        for (let i = buckets.length -1; i > 0; i--) {
            for (let j = 0; j < buckets[i].length; j++) {
                result.push(buckets[i][j]);
                if (result.length == k) {
                    return result;
                }
            }
        }
    }
}
