const myIterable = {
    from: 1,
    to: 4,

    [Symbol.iterator]() {
        if (isNaN(this.from) || isNaN(this.to) || this.to < this.from) {
            throw new Error('the passed arguments for this operation are invalid')
        }
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ }
        } else {
            return { done: true }
        }
    }
};

for (let item of myIterable) {
    console.log(item); // 1, 2, 3, 4
}