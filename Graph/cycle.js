class Graph {
    constructor() {
        this.adjacencyList = {}
    };


    addvertex(v) {
        if (!this.adjacencyList[v]) {
            this.adjacencyList[v] = [];
        };
    };


    addEdge(v1, v2) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
            return;
        };

        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    };


    removeEdge(v1, v2) {

        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
            return;
        };

        this.adjacencyList[v1] = this.adjacencyList[v1].filter((a) => a !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((a) => a !== v1);
    };

    removeVertex(v1) {
        if (!this.adjacencyList[v]) {
            return;
        };

        for (let neigh of this.adjacencyList[v1]) {
            this.removeEdge(neigh, v1);
        };

        delete this.adjacencyList[v1];
    };


    hasCycle() {
        let visited = new Set();

        for (let start in this.adjacencyList) {
            if (!visited.has(start)) {
                if (this.bfsCheck(start, visited)) {
                    return true;
                }
            }
        }

        return false;
    };


    bfsCheck(start, visited) {
        const queue = [];
        visited.add(start);
        queue.push([start, null]);

        while (queue.length > 0) {
            const [node, parent] = queue.shift();
            for (let neigh of this.adjacencyList[node]) {
                if (!visited.has(neigh)) {
                    visited.add(neigh);
                    queue.push([neigh, node]);
                } else if (neigh !== parent) {

                    return true;
                }


            }
        };

        return false;
    }
};



const graph = new Graph();
graph.addvertex("A");
graph.addvertex("B");
graph.addvertex("C");
graph.addvertex("D");
graph.addEdge("A","B");
graph.addEdge("B","C");
graph.addEdge("C","B");
graph.addEdge("C","D");
console.log(graph.hasCycle());



