class Graph {
    constructor () {
        this.adjacencyList = {};
    };

    addVertex(v) {
        if ( !this.adjacencyList[v] ) {
            this.adjacencyList[v] = [];
        };
    };


    addEdge( from , to ) {
        if ( !this.adjacencyList[from] || !this.adjacencyList[to] ) {
            return;
        };

        this.adjacencyList[from].push(to);
    };


    removeEdge( from , to ) {
        if ( !this.adjacencyList[from] || !this.adjacencyList[to] ) {
            return;
        };

        this.adjacencyList[from] = this.adjacencyList[from].filter((a) => a != to );
    };


    removeVertex( v ) {
        if ( !this.adjacencyList[v] ) {
            return;
        };

       for ( let vertex in this.adjacencyList ) {
           this.adjacencyList[vertex]  = this.adjacencyList[vertex].filter((a) => a != v);
       };

       delete this.adjacencyList[v];
    };



    bfs( start ) {
        let visited = new Set();
         let queue = [];

         visited.add(start);
         queue.push(start);

         while ( queue.length > 0 ) {
            let vertex = queue.shift();
            console.log(vertex);

            for ( let neigh of this.adjacencyList[vertex] ) {
                if ( !visited.has(neigh )  ) {
                    queue.push(neigh);
                    visited.add(neigh);
                }
            }
         }

    }
};


const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A","B");
graph.addEdge("B","C");
graph.addEdge("C","A");
graph.bfs("A");