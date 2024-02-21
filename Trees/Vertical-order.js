class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class QueueNode {
    constructor(node, hd) {
      this.node = node;
      this.hd = hd; 
    }
  }  
class Tree{
    constructor(){
        this.root = null;
    }
    add(value){
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(root, newNode){
        if( newNode.value < root.value){
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
    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }
    verticalOrder(root) {
        if( !root ) return;
        let queue = [];
        let map = new Map();
        queue.push(new QueueNode(root, 0));


        while( queue.length ){
            const curr = queue.shift();
            const node = curr.node;
            const hd = curr.hd;        

            if (!map.has(hd)) {
                map.set(hd, [node.value]);
              } else {
                map.get(hd).push(node.value);
              }

              if (node.left) {
                queue.push(new QueueNode(node.left, hd - 1));
              }
              if (node.right) {
                queue.push(new QueueNode(node.right, hd + 1));
              }
        }

        const sortedKeys = [...map.keys()].sort((a, b) => a - b);

        for (const key of sortedKeys) {
          console.log(`Hd(${key}): values-[${map.get(key)}]`)
        }
    }
    helper(node,ans){
        if(!node)   {
            //console.log("returned")
            return ans
        };
        //console.log("currently in"+node?.value)
        if((node.left && node.right===null ) || (node.right!==null && node.left===null)) {
            console.log(`The node ${node.value} has a single child`)
            ans += node.value;
            return ans;
        }
        let left = this.helper(node.left,ans);
        let right= this.helper(node.right,ans);
        // console.log("left"+left)
        // console.log("right"+right)
        return left+right;
    }
    sumOfSingleChild(node){
        return this.helper( node,0);
    }
    LCA(root,val1,val2){
        if(!root) return null;      
        if( root.value===val1 || root.value===val2 )    return root;
        let Left = this.LCA(root.left,val1,val2);
        let Right = this.LCA(root.right,val1,val2);

        if(Left && Right)   return root;
        return Left ? Left : Right;
    }
}

const tree = new Tree();
tree.add(10);
tree.add(7);
tree.add(9);
// tree.add(4);
tree.add(15);
tree.add(16);


//tree.inOrder(tree.root);
tree.verticalOrder(tree.root)
console.log("Sum of single child parent nodes:"+tree.sumOfSingleChild(tree.root))
const val1 = 9
const val2 = 4
const val = tree.LCA(tree.root,val1,val2).value
console.log(`The common ancestor of ${val1} & ${val2} is:${val}`)