class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    isEmpty(){
        return this.root === null;
    }
    insert(val){
        const newNode = new Node(val);
        if(this.isEmpty()){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(root, newNode){
        if( newNode.val < root.val){
            if(root.left === null)
                root.left = newNode;
            else
                this.insertNode(root.left, newNode);
        }else{
            if(root.right === null)
                root.right = newNode;
            else
                this.insertNode(root.right, newNode);
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.val);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.val);
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.val);
        }
    }
    levelOrder(){
        const queue =[];
        queue.push(this.root);
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.val);
            if(curr.left)   queue.push(curr.left);
            if(curr.right)  queue.push(curr.right);
        }
    }
    min(root){
        if(!root.left)  
            return root.val;
        else{
            return this.min(root.left);
        }
    }
    max(root){
        if(!root.right)  
            return root.value;
        else{
            return this.min(root.right);
        }
    }
    delete(value){
        this.root = this.deleteNode(this.root,value);
    }
    deleteNode(root, value){
        console.log("val:"+root.val);
        if(root ===null)   
            return root;
        if(value > root.val){
            root.right = this.deleteNode(root.right, value);
        }else if(value < root.val){
            root.left = this.deleteNode(root.left, value);
        }else{
            if(!root.left && !root.right)   return null;
            if(!root.left)  
                {return root.right;}
            else if(!root.right) 
                {return root.left;}
            root.val = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value);
            console.log(`The node ${value} is deleted successfully`)
        }
        return root;
    }
}


const tree = new BinarySearchTree();
console.log(tree.isEmpty());
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

tree.delete(5)
tree.levelOrder()
// console.log("The preorder traversal is:")
// tree.preOrder(tree.root)
// console.log("The Inorder traversal is:")
// tree.inOrder(tree.root)
// console.log("The postOrder traversal is:")
// tree.postOrder(tree.root)
// console.log("The BFS is:")
// tree.levelOrder()
// console.log("The min value is:"+tree.min(tree.root))
// console.log("The max value is:"+tree.max(tree.root))