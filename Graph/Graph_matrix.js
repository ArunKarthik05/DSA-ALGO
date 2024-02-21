const matrix = [
    //A,B,C
    [0,1,0 ],
    [1,0,1 ],
    [0,0,1,]
]

class Graph{
    constructor(){
        this.matrix =[];
        this.keys = [];
    }
    addVertex(vertex){
        if( !this.keys.includes(vertex)){
            this.keys.push(vertex);
            console.log(this.keys)
            let temp = new Array(this.keys.length).fill(0);
            console.log(temp)
            this.matrix.push(temp);
            for ( let i = 0; i < this.matrix.length; i++ ){
                if( this.matrix[i].length < this.keys.length)
                this.matrix[i].push(0)
            }
            console.log(vertex + " vertex added")
        }
    }
    addEdges(v1,v2){
        if( !this.keys.includes(v1)){
            this.addVertex(v1)
        }
        if( !this.keys.includes(v2)){
            this.addVertex(v2)
        }
        let index1 = this.keys.indexOf(v1)
        let index2 = this.keys.indexOf(v2)
        console.log("v1: "+index1+" v2: "+index2)
        this.matrix[index1][index2] = 1
        this.matrix[index2][index1] = 1
    }
}

const graph = new Graph();
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('H')

graph.addEdges('A','B')
graph.addEdges('A','H')
console.log(graph.matrix)
console.log(graph.keys)