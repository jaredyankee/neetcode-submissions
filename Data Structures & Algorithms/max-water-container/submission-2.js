class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let low = 0;
        let high= heights.length - 1;
        let max = Math.min(heights[low], heights[high]) * (high - low);

        while (low < high) {
            max  = Math.max(
                max, 
                Math.min(heights[low], heights[high]) * (high - low)
            );
            if (heights[low] <= heights[high])
                low++;
            else
                high--;
        }
        return max;
    }
}
