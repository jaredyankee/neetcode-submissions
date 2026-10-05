class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length)
            return false;

        let map = {};
        for (let i = 0; i < s.length; i++) {
            if (s[i] in map) {
                map[s[i]]++;
            } else {
                map[s[i]] = 1;
            }            
        }
        for (let i = 0; i < t.length; i++) {
            if (s[i] in map) {
                map[t[i]]--;
            } else {
                return false;
            }   
        }
        for (const k in map) {
            if (map[k] != 0)
                return false;
        }
        return true;
    }
}
