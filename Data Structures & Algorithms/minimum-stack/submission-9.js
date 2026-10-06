class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if (!this.minStack.length) {
            this.minStack.push(val);
        } else if (val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }

    }

    /**
     * @return {void}
     */
    pop() {
        let popped = this.stack.pop();
        if (this.minStack.length) {
            if (this.minStack[this.minStack.length - 1] == popped) {
                this.minStack.pop();
            }
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.minStack.length)
            return this.minStack[this.minStack.length - 1];
    }
}
