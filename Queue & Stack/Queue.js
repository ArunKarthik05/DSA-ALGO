class Queue{
    constructor(){
        this.queue = [];
        this.length = this.queue.length;
    }

    enqueue(element){ 
        this.queue[this.length] = element;
        this.length++;
        console.log(`enqueued element ${element}`)
    }
    dequeue() {
        let i=0;
        let element = this.queue[0]
        for (let i = 0; i < this.length - 1; i++) {
            this.queue[i] = this.queue[i + 1];
        }
        this.length--;
        console.log(`Dequeued element ${element}`)
    }
    print(){
        console.log("The queue is:")
        for(let i = 0; i<this.length; i++){
            console.log(this.queue[i]);
        }
    }
}

const obj = new Queue();
obj.enqueue(1);
obj.enqueue(2);
obj.dequeue();
obj.print();