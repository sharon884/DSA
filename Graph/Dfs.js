class Graph {
    constructor () {
        this.adjacencyList = {};
    };


    addVertex( v ) {
        if ( !this.adjacencyList[v] ) {
            this.adjacencyList[v] = [];
        }
    };

    addEdge( v1, v2 ) {
        if ( !this.adjacencyList[v1] || !this.adjacencyList[v2] ) {
            return;
        };

        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    };


    removeEdge( v1,v2 ) {
        if ( !this.adjacencyList[v1] || !this.adjacencyList[v2] ) {
            return;
        };

        this.adjacencyList[v1] = this.adjacencyList[v1].filter((a) => a != v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((a) => a!= v1);
    };


    removeVertex( v1 ) {
        if (!this.adjacencyList[v1]) return;
        while ( this.adjacencyList[v1].length ) {
            let edge = this.adjacencyList[v1].pop();
            this.removeEdge(v1,edge);
        };

        delete this.adjacencyList[v1];
    };


    dfs( vertex, visited = new Set() ) {
        visited.add(vertex);
        console.log(vertex);

        for ( let neigh of this.adjacencyList[vertex] ) {
            if (!visited.has(neigh) ) {
                this.dfs(neigh,visited);
            }
        }
    };


}



const graph = new Graph();
graph.addVertex("a");    
graph.addVertex("b");    
graph.addVertex("c");    
graph.addVertex("d");    
graph.addVertex("e");    
graph.addVertex("f");    
graph.addVertex("g");    
graph.addVertex("h");
graph.addEdge("a","b");   
graph.addEdge("b","c");  
graph.addEdge("c","d");  
graph.addEdge("d","f");  
graph.addEdge("f","g");
graph.addEdge("g","h");
graph.addEdge("h","a");       

graph.dfs("a");
