class Stack {
    constructor(data) {
        this.data = data || [];
        this.index = 0;
    }

    push(elem) {
        if (!!this.data.length) this.index = this.data.length;

        this.data[this.index] = elem;
        
        this.index++
        return this.data
    }

    pop() {
        this.data.length -= 1;
        this.index--
        return this.data
    }

    size() {
        return this.index;
    }

    peek() {
        return this.data[this.index - 1]
    }

    toString() {
        return String(this.data)
    }
}
