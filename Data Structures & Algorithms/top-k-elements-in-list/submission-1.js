class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        for (const num of nums) {
            if (num in map) {
                map[num]++;
            } else {
                map[num] = 1;
            }
        }
        const ranking = Object.entries(map).sort((a, b) => a[1] - b[1]);
        return ranking.slice(ranking.length - k).map(item => parseInt(item[0])); 
    }
}
