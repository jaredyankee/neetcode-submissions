class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(s => `${s.length}#${s}`).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let gatherLength = 0;

        while (str.length) {
            let hashIndex = str.indexOf("#");
            gatherLength = parseInt(str.substring(0, hashIndex));
            result.push(str.substring(hashIndex + 1, hashIndex + gatherLength + 1));
            str = str.substring(hashIndex + gatherLength + 1);
        }

        return result;
    }
}
