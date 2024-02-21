class Graph{
    constructor(){
        this.list ={};
    }
    addVertex(vertex){
        if( !this.list[vertex] ){
            this.list[vertex] = new Set();
            console.log(vertex+" vertex added")
        }
    }
    addEdges(v1,v2){
        if( !this.list[v1] ){
            this.addVertex(v1)
        }
        if( !this.list[v2] ){
            this.addVertex(v2)
        }
        //Add v2 into the set
        this.list[v1].add(v2);
        this.list[v2].add(v1);
        console.log(`${v1} is connected to ${v2}`)
    }
}

const graph = new Graph();
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdges('A','B')
graph.addEdges('A','C')