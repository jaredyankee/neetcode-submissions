class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const hashMap = new Map();

        for (let i = 0; i < numbers.length; i++) {
            const complement = target - numbers[i];
            if (hashMap.has(complement)) {
                return [hashMap.get(complement) + 1, i + 1];
            }
            hashMap.set(numbers[i], i);
        }
    }
}
