// // // // // class Graph {
// // // // //     constructor() {
// // // // //         this.adjacencyList = {};
// // // // //     };

// // // // //     addVertex ( v  ) {
// // // // //         if ( !this.adjacencyList[v] ) {

// // // // //             this.adjacencyList[v] = []
// // // // //         };
// // // // //     };

// // // // //     addEdge ( v1, v2 ) {
// // // // //         if ( !this.adjacencyList[v1] || !this.adjacencyList[v2] ) {
// // // // //             return;
// // // // //         };
// // // // //         this.adjacencyList[v1].push( v2);
// // // // //         this.adjacencyList[v2].push(v1);

// // // // //     };


// // // // //     removeEdge( v1, v2 ) {
// // // // //         if ( !this.adjacencyList[v1] ||  !this.adjacencyList[v2] ) {
// // // // //             return ;
// // // // //         };

// // // // //         this.adjacencyList[v1] = this.adjacencyList[v1].filter((a) => a != v2);
// // // // //         this.adjacencyList[v2] = this.adjacencyList[v2].filter(( a) => a !== v1);
// // // // //     };

// // // // //     removeVertex( v1 ) {
// // // // //         if ( !this.adjacencyList[v1] ) {
// // // // //             return ;
// // // // //         };

// // // // //          while( thisa.adjacencyList[v1].length ) {
// // // // //             let poped = this.adjacencyList[v1].pop();
// // // // //             this.removeEdge(v1,poped);
// // // // //          };

// // // // //          delete this.adjacencyList[v1];
// // // // //     };

// // // // //     dfs ( start ,  visited = new Set() )  {

// // // // //         visited.add(start);
// // // // //         console.log(start);

// // // // //         for ( let neigh of this.adjacencyList[start] ) {
// // // // //             if ( !visited.has(neigh) ) {
// // // // //                 this.dfs(neigh, visited);
// // // // //             }
// // // // //         };

// // // // //     };



// // // // // };


// // // // // const graph = new Graph();
// // // // // graph.addVertex("V");
// // // // // graph.addVertex("W");
// // // // // graph.addVertex("X");
// // // // // graph.addVertex("Y");
// // // // // graph.addVertex("Z");

// // // // // graph.addEdge("V","W");
// // // // // graph.addEdge("W","X");
// // // // // graph.addEdge("Y","Z");
// // // // // graph.dfs("V");




// // // // //directed graph 

// // // // class Graph {
// // // //     constructor() {
// // // //         this.adjacencyList = {};
// // // //     };

// // // //     addVertex(v) {
// // // //         if (!this.adjacencyList[v]) {
// // // //             this.adjacencyList[v] = [];
// // // //         };
// // // //     };

// // // //     addEdge(v1, v2) {
// // // //         if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
// // // //             return;
// // // //         };

// // // //         this.adjacencyList[v1].push(v2);
// // // //     };


// // // //     removeEdge(from, to) {
// // // //         if (!this.adjacencyList[from] || !this.adjacencyList[to]) {
// // // //             return;
// // // //         };

// // // //         this.adjacencyList[from] = this.adjacencyList[from].filter((a) => a != to);
// // // //     };

// // // //     removeVertex(vertex) {
// // // //         if (!this.adjacencyList[vertex]) return;

// // // //         for (let neigh in this.adjacencyList) {
// // // //             this.adjacencyList[neigh] = this.adjacencyList[neigh].filter((a) => a != vertex);
// // // //         };

// // // //         delete this.adjacencyList[vertex];
// // // //     };


// // // //     dfs(start, visited = new Set()) {
// // // //         visited.add(start);
// // // //         console.log(start);

// // // //         for (let neigh of this.adjacencyList[start]) {
// // // //             if (!visited.has(neigh)) {
// // // //                 this.dfs(neigh, visited);
// // // //             }
// // // //         };
// // // //     };


// // // //     bfs( start ) {

// // // //         let visited = new Set();
// // // //         let queue = [];
// // // //         visited.add(start);
// // // //         queue.push(start);

// // // //         while ( queue.length > 0 ) {
// // // //             let current = queue.shift();
// // // //             console.log(current);

// // // //             for ( let neigh of this.adjacencyList[current] ) {
// // // //                 if ( !visited.has(neigh) ) {
// // // //                     visited.add(neigh);
// // // //                     queue.push(neigh);
// // // //                 }
// // // //             };

// // // //         }
// // // //     }




// // // // };


// // // // const g = new Graph();

// // // // g.addVertex("A");
// // // // g.addVertex("B");
// // // // g.addVertex("C");
// // // // g.addVertex("D");
// // // // g.addVertex("E");
// // // // g.addVertex("F");

// // // // g.addEdge("A", "B");
// // // // g.addEdge("A", "C");
// // // // g.addEdge("B", "D");
// // // // g.addEdge("B", "E");
// // // // g.addEdge("E", "F");


// // // // // adj 
// // // // // a = b, c
// // // // // b = d, e, 
// // // // // e = f 

// // // // //dfs - a , b, d, e, f, c
// // // // // bfs - a,b,c,d,e,f

// // // // g.dfs("A");
// // // // // g.bfs("A"); 



// // // class Graph {
// // //     constructor() {
// // //         this.adjacencyList = {};
// // //     };


// // //     addVertex( v ) {
// // //         if ( !this.adjacencyList[v] ) {
// // //             this.adjacencyList[v] = [];
// // //         };
// // //     };


// // //     addEdge ( v1, v2 ) {
// // //         if ( !this.adjacencyList[v1] || !this.adjacencyList[v2] ) {
// // //             return;
// // //         };

// // //         this.adjacencyList[v1].push(v2);
// // //         this.adjacencyList[v2].push(v1);
// // //     };


// // //     removeEdge( v1,v2 ) {
// // //         if ( !this.adjacencyList[v1] || !this.adjacencyList[v2] ) {
// // //             return;
// // //         };

// // //         this.adjacencyList[v1] = this.adjacencyList[v1].filter((a) => a !== v2);
// // //         this.adjacencyList[v2] = this.adjacencyList[v2].filter((a) => a !== v1);
// // //     };


// // //     dfs( start, visited = new Set() ) {
// // //          visited.add(start);
// // //          console.log(start);

// // //          for ( let neigh of this.adjacencyList[start] ) {
// // //             if ( !visited.has(neigh) ) {
// // //                 this.dfs(neigh,visited);
// // //             }
// // //          }
// // //     };



// // //     bfs ( start ) {
// // //         let queue = [];
// // //         let visited = new Set();

// // //         visited.add(start);
// // //         queue.push(start);

// // //         while ( queue.length > 0 ) {
// // //             let current = queue.shift();
// // //             console.log(current);

// // //             for ( let neigh of this.adjacencyList[current] ) {
// // //                 if ( !visited.has(neigh)) {
// // //                     visited.add(neigh);
// // //                     queue.push(neigh);
// // //                 }
// // //             }
// // //         }
// // //     };



// // //     hasCycle(  ) {

// // //         let visited = new Set();

// // //         for ( let vertex in this.adjacencyList ){
// // //             if (!visited.has(vertex) ) {
// // //                 if ( this.bfsCheck( vertex,visited ) ) {
// // //                     return true;
// // //                 }
// // //             }
// // //         }
// // //        return false;
// // //     };


// // //     bfsCheck( vertex, visited ) {
// // //         let queue = [];
// // //         visited.add(vertex);
// // //         queue.push([vertex,null]);


// // //         while ( queue.length > 0 ) {
// // //             const [ node, parent ] = queue.shift();

// // //             for ( let neigh of this.adjacencyList[node] ) {
// // //                 if ( !visited.has(neigh) ) {
// // //                     visited.add(neigh);
// // //                     queue.push([neigh, node ]);
// // //                 }else if ( neigh !== parent ) {
// // //                     return true;
// // //                 }
// // //             }
// // //         };

// // //         return false;
// // //     }
// // // }




// // class Graph {
// //     constructor() {
// //         this.adjacencyList = {};
// //     };


// //     addVertex( v ) {
// //         if ( !this.adjacencyList[v] ) {
// //             this.adjacencyList[v] = [];
// //         };
// //     };


// //     addEdge( v1, v2 ) {
// //         if ( !this.adjacencyList[v1] || !this.adjacencyList[v2] ) {
// //             return;
// //         };

// //         this.adjacencyList[v1].push(v2);
// //     };


// //     removeEdge( v1, v2 ) {
// //         if ( !this.adjacencyList[v1] || !this.adjacencyList[v2] ) {
// //             return;
// //         };

// //         this.adjacencyList[v1] = this.adjacencyList[v1].filter((a) => a != v2);
// //     };  

// //     removeVertex ( v ) {
// //         if ( !this.adjacencyList[v] ) return ;

// //         for ( let vertex in this.adjacencyList ) {
// //              this.adjacencyList[vertex ] = this.adjacencyList[vertex].filter((a) => a != v );
// //         };

// //         delete this.adja[v];
// //     };


// //     dfs ( start, visited = new Set() ) {
// //         visited.add(start);
// //         console.log(start);

// //         for ( let neigh of this.adjacencyList[start] ) {
// //             if ( !visited.has(neigh) ) {
// //                 this.dfs(neigh,visited);
// //             }
// //         }
// //     };


// //     bfs ( start ) {
// //         let queue = [];
// //         let visited = new Set();
// //         queue.push(start);
// //         visited.add(start);

// //         while ( queue.length >  0 ) {
// //             let current = queue.shift();
// //              console.log(current);

// //              for ( let neigh of this.adjacencyList[current] ) {
// //                 if ( !visited.has(neigh) ) {
// //                     visited.add(neigh);
// //                     queue.push(neigh);
// //                 }
// //              }
// //         }
// //     };



// //     hasCycle () {
// //         let visited  = new Set();

// //         for ( let vertex in this.adjacencyList ) {
// //             if (!visited.has(vertex) ) {
// //                 if ( this.bfsCheck(vertex,visited)){
// //                     return true;
// //                 };
// //             }
// //         };

// //         return false;
// //     };


// //     bfsCheck(start,visited) {

// //         let queue = [];
// //         visited.add(start);
// //         queue.push([start,null]);

// //         while ( queue.length > 0 ) {
// //             let [ node , parent ] = queue.shift();

// //             for ( let neigh of this.adjacencyList[node] ) {
                      
// //                   if ( !visited.has(neigh) ) {
// //                     visited.add(neigh);
// //                     queue.push([neigh,node]);
// //                   }else if ( neigh !== parent ) {
// //                     return true;
// //                   }
// //             }
// //         };

// //         return false;
// //     }
// // }; 



// class TrieNode {
//     constructor() {
//         this.children = {};
//         this.isEnd = false;
//     };
// };


// class Trie {
//     constructor() {
//         this.root = new TrieNode();
//     };


//     insert ( word ) {
//         let node = this.root;
//         for ( let char of word ) {
//             if ( !node.children[char] ) {
//                 node.children[char] = new TrieNode();
//             };

//             node = node.children[char];
//         };

//         node.isEnd = true;
//     };


//     search ( word ) {
//         let node = this.root;

//         for ( let char of word ) {
//             if (! node.children[char] ) {
//                 return false;
//             };

//             node = node.children[char];
//         };

//         return node.isEnd;
//     };


//     prefix ( word ) {
//         let node = this.root;

//         for ( let char of word ) {
//             if (!node.children[char] ) {
//                 return false;
//             };

//             node = node.children[char];
//         };

//         return  true;
//     };


//     insertReverse( word ) {
//         let reverse = word.split("").reverse().join("");
//         let node = this.root;

//         for ( let char of reverse ) {

//              if ( !node.children[char] ) {
//                 node.children[char] = new TrieNode();
//              };

//              node = node.children[char];
        
//         }
            
//         node.isEnd = true;
//     };


//     suffix( word ) {
//         let node = this.root;
//         let reverse = word.split("").reverse().join("");

//         for ( let char of reverse ) {
//             if ( !node.children[char] ) {
//                 return false;
//             };

//             node = node.children[char];
//         };

//         return true;
        
//     };


//     auto ( word ) {
//         let node = this.root;
//         for ( let char of word ) {
//             if (!node.children[char] ) {
//                 return [];
//             };

//             node = node.children[char];
//         };

//         let result = [];

//         const dfs = ( currentNode, currentWord ) => {

//             if ( currentNode.isEnd == true ) {
//                 result.push(currentWord);
//             };
            

//             for ( let char in currentNode.children ) {
//                 dfs(currentNode.children[char], currentWord + char );
//             };

//         };

//         dfs( node, word );
//         return result;
//     }



// };


// const t = new Trie();
// t.insert("cat");
// t.insert("cap");
// t.insert("car");
// t.insert("gap");
// t.insert("cash");
// console.log(t.prefix("ca"));
// console.log(t.auto("ca"))