class Queue {
    constructor() {
        this.data = {}
        this.back = 0;
        this.front = 0;
    }

    enqueue(value) {
        this.data[this.back] = value;
        this.back++;
        return this.data;
    }
    
    dequeue() {
        if (this.back >= 1) {
            delete this.data[this.back - 1]
            this.back--;
            return this.data
        } 
    }

    head() {
        return this.data[this.front]
    }

    isEmpty() {
        return !this.back
    }

    size() {
        return this.back - this.front;
    }

    toArray() {
        let array = [];
        let count = 0;

        const newData = this.data

        while (newData[count]) {
            array.push(newData[count]);
            count++
        }
        return array;
    }
}
