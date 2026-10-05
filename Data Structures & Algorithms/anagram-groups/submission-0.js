class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        let result = [];
        for (const str of strs) {
            let sorted = str.split("").sort().join("");
            if (sorted in map) {
                result[map[sorted]].push(str)
            } else {
                map[sorted] = result.length;
                result.push([str]);
            }
        }
        return result;
    }
}
