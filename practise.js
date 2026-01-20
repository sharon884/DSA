class Graph {
    constructor() {
        this.adjacencyList = {};
    };

    addVertex ( v  ) {
        if ( !this.adjacencyList[v] ) {

            this.adjacencyList[v] = []
        };
    };

    addEdge ( v1, v2 ) {
        if ( !this.adjacencyList[v1] || !this.adjacencyList[v2] ) {
            return;
        };
        this.adjacencyList[v1].push( v2);
        this.adjacencyList[v2].push(v1);

    };


    removeEdge( v1, v2 ) {
        if ( !this.adjacencyList[v1] ||  !this.adjacencyList[v2] ) {
            return ;
        };

        this.adjacencyList[v1] = this.adjacencyList[v1].filter((a) => a != v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(( a) => a !== v1);
    };

    removeVertex( v1 ) {
        if ( !this.adjacencyList[v1] ) {
            return ;
        };

         while( thisa.adjacencyList[v1].length ) {
            let poped = this.adjacencyList[v1].pop();
            this.removeEdge(v1,poped);
         };

         delete this.adjacencyList[v1];
    };

    dfs ( start ,  visited = new Set() )  {
        
        visited.add(start);
        console.log(start);

        for ( let neigh of this.adjacencyList[start] ) {
            if ( !visited.has(neigh) ) {
                this.dfs(neigh, visited);
            }
        };

    };



};


const graph = new Graph();
graph.addVertex("V");
graph.addVertex("W");
graph.addVertex("X");
graph.addVertex("Y");
graph.addVertex("Z");

graph.addEdge("V","W");
graph.addEdge("W","X");
graph.addEdge("Y","Z");
graph.dfs("V");


