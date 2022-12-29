class Node {
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class DoubleList {
    constructor() {
        this.head = {}
        this.tail = null;
        this.length = 0
    }

    append(value) {
        if (!value) return null;

        const newNode = new Node(value, this.head);

        this.head = newNode;
        const prevElement = this.getElementAt(0);
        this.head.next.prev = prevElement;

        if (!this.tail) {
            return this.prepend(value)
        }

        this.length++

        return this;
    }

    prepend(value) {
        if (!value) return null;

        const newNode = new Node(value);

        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode
            this.length++
            return this;
        }

        let prevElement = this.getElementAt(this.length - 1);
        newNode.prev = prevElement
        this.tail.next = newNode;

        this.tail = newNode;
        this.length++

        return this;
    }

    deleteStart() {
        if (!this.head.next && this.head.prev === null) this.clear();

        let current = this.head
        this.head = current.next;
        this.head.prev = null;


        this.length--

        return this;
    }

    deleteLastElement() {
        if (!this.tail) return null;

        this.tail = this.tail.prev;
        this.tail.next = null;

        this.length--
        
        return this;
    }

    deleteFromIndex(index) {
        if (!this.tail || index >= this.length) return null;

        let elem = this.getElementAt(index);

        if (index === 0) {
            this.deleteStart();
        } else if (index == this.length - 1) {
            this.deleteLastElement()
        } else {
            elem.prev.next = elem.next;
            elem.next.prev = elem.prev;
            this.length--
        }


        return this;
    }
    
    insertAt(value, index) {
        if(!Number.isInteger(index) || index < 0 || index > this.length - 1) return null;
        
        const elem = this.getElementAt(index);
        
        const newNode = new Node(value, elem.next, elem)

        if (elem.next) {
            elem.next.prev = newNode
         } else { 
            elem.next = null 
            this.tail = newNode
         }
        elem.next = newNode;

        this.length++

        return this;
    }

    getLastNode() {
        if(this.length < 1) return null;

        return this.tail;
    }

    getElementAt(index) {
        if (index < 0 || index > this.length) return null;

        let currentNode = this.head;
        for (let i = 0; i < index && currentNode !== null; i++) {
            currentNode = currentNode.next 
        }

        return currentNode;
    }

    size() {
        return this.length;
    }

    isEmpty() {
        return !this.length
    }

    clear() {
        this.head = {};
        this.tail = null;
        this.length = 0
    }
}