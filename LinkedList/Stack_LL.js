class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(element) {
        const newNode = new Node(element);

        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }

        this.length++;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Underflow: Queue is empty");
            return null;
        }

        const removedElement = this.front.data;
        this.front = this.front.next;
        this.length--;

        // If the queue becomes empty after dequeue
        if (this.isEmpty()) {
            this.rear = null;
        }

        return removedElement;
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    print() {
        let current = this.front;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Queue after enqueuing elements:");
queue.print();

console.log("Dequeue operation result:", queue.dequeue());

console.log("Queue after dequeuing one element:");
queue.print();
