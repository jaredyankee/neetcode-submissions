class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let alphanumeric = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        console.log(alphanumeric);
        return alphanumeric.split("").reverse().join("") == alphanumeric;
    }
}
