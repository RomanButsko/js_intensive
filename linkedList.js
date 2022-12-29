class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToTheEnd(value) {
        const newNode = new Node(value);
        
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }
        
        this.tail.next = newNode;

        this.tail = newNode;

        return this
    }

    addToTop(value) {
        const newNode = new Node(value, this.head);

        this.head = newNode;

        if (!this.tail) {
            this.addToTheEnd(value);
        }
        return this;
    }

    find(value) {
        if (!this.head) return null;

        let currentHead = this.head;

        while(currentHead) {
            if (currentHead.value === value) return currentHead

            currentHead = currentHead.next;
        }

        return null;
    }

    delete(value) {
        if (!this.head) return null;

        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let currentHead = this.head;

        if (currentHead !== null) {
            while (currentHead.next) {
                if (currentHead.next.value === value) {
                    currentHead.next = currentHead.next.next
                } else {
                    currentHead = currentHead.next;
                }
            }
        }

        if (this.tail.value === value) {
            this.tail = currentHead
        }

        return this;
    }

    deleteTail() {
        if (!this.head) return null;

        let currentHead = this.head

        while (currentHead) {
            if (currentHead.next.next === null) {
                currentHead.next = null;
                this.tail = currentHead
            }

            currentHead = currentHead.next;
        }

        return this
    }

    deleteHead() {
        if (!this.head) return null;

        this.head = this.head.next;

        return this;
    }

    fromArray(array) {
        for (let key of array) {
            this.addToTheEnd(key);
        }
    }

    insertAfter(value, afterNode) {
        let node = this.find(afterNode);

        const newNode = new Node(value);

        newNode.next = node.next;

        node.next = newNode;

        if (newNode.next === null) {
            this.tail = newNode
        }
        
        return this;
    } 
}

