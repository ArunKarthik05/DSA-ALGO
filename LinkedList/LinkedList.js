class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToFront(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    addToEnd(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    getSize() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    insertAtAfter(index, data) {
        if (index < 0 || index > this.getSize()) {
            console.error("INVALID INDEX");
            return;
        }
        const newNode = new Node(data);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        for (let i = 0; i < index ; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
    }

    insertAtBefore(index, data) {
        if (index < 0 || index > this.getSize()) {
            console.error("INVALID INDEX");
            return;
        }
        const newNode = new Node(data);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
    }

    removeFromFront() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeFromEnd() {
        if (!this.head) {
            return;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    removeAt(index) {
        if (index < 0 || index >= this.getSize()) {
            console.error("INVALID INDEX");
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
        }
    }

    print() {
        let current = this.head;
        let array = [];
        while (current) {
            array.push(current.data);
            current = current.next;
        }
        console.log(array);
    }
}

const linkedList = new LinkedList();
linkedList.addToFront(1);
linkedList.addToFront(2);
linkedList.addToFront(3);
linkedList.addToEnd(4);
linkedList.addToEnd(7);
linkedList.print();
linkedList.insertAtAfter(2, 5);
console.log("linkedList after inserting 5 after 2nd index");
linkedList.print();
linkedList.insertAtBefore(2, 9);
console.log("linkedList after inserting 9 before 2nd index");
linkedList.print();

console.log("size = " + linkedList.getSize());
