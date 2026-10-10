class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let low = 0;
        let high= heights.length - 1;
        let max = Math.min(heights[low], heights[high]) * (high - low);
        const calculateVolume = (low, high, distance) => {
            return Math.min(low, high) * distance;
        } 
        while (low < high) {
            max  = Math.max(
                max, 
                calculateVolume(heights[low], heights[high], high - low)
            );
           
            if (heights[low] <= heights[high])
                low++;
            else
                high--;
        }
        return max;
    }
}
