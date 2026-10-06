class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // open brackets and how any trimes they've appeared
        let openBrackets = new Set(["{", "(", "["]);

        // close brackets and their corresponding opening brackets
        let closeBrackets = new Map();
        closeBrackets.set(")", "(");
        closeBrackets.set("}", "{");
        closeBrackets.set("]", "[");

        const stack = [];
        for (let i = 0; i < s.length; i++) {
            // if stack is empty and closing bracket
            if (!stack.length && !openBrackets.has(s[i]))
                return false;
            
            if (openBrackets.has(s[i])) {
                stack.push(s[i]);
            } else {
                if (stack[stack.length - 1] == closeBrackets.get(s[i])) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
        if (stack.length)
            return false;
        return true;



    }
}
