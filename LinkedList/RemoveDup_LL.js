class Node{
    constructor(val){
    this.data = val;
    this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addData(data) {
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
    
    removeDuplicates()
    {
        let set = new Set([]);
        let curr = this.head;
        let prev = null;
        while(curr){
            if(set.has(curr.data)){
                prev.next = curr.next;
            }
            else{
                set.add(curr.data);
                prev = curr;
            }
            curr = curr.next;
        }
    }
    print(){
        let current = this.head;
        let array = [];
        while (current) {
            array.push(current.data);
            current = current.next;
        }
        console.log(array);
    }
}

const LL = new LinkedList();
LL.addData(1);
LL.addData(1);
LL.addData(1);
LL.print();
console.log("LinkedList after removing duplicates:")
LL.removeDuplicates();
LL.print();