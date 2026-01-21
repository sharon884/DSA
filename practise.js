// // // // // // // // class Graph {
// // // // // // // //     constructor() {
// // // // // // // //         this.adjacencyList = {};
// // // // // // // //     };

// // // // // // // //     addVertex ( v  ) {
// // // // // // // //         if ( !this.adjacencyList[v] ) {

// // // // // // // //             this.adjacencyList[v] = []
// // // // // // // //         };
// // // // // // // //     };

// // // // // // // //     addEdge ( v1, v2 ) {
// // // // // // // //         if ( !this.adjacencyList[v1] || !this.adjacencyList[v2] ) {
// // // // // // // //             return;
// // // // // // // //         };
// // // // // // // //         this.adjacencyList[v1].push( v2);
// // // // // // // //         this.adjacencyList[v2].push(v1);

// // // // // // // //     };


// // // // // // // //     removeEdge( v1, v2 ) {
// // // // // // // //         if ( !this.adjacencyList[v1] ||  !this.adjacencyList[v2] ) {
// // // // // // // //             return ;
// // // // // // // //         };

// // // // // // // //         this.adjacencyList[v1] = this.adjacencyList[v1].filter((a) => a != v2);
// // // // // // // //         this.adjacencyList[v2] = this.adjacencyList[v2].filter(( a) => a !== v1);
// // // // // // // //     };

// // // // // // // //     removeVertex( v1 ) {
// // // // // // // //         if ( !this.adjacencyList[v1] ) {
// // // // // // // //             return ;
// // // // // // // //         };

// // // // // // // //          while( thisa.adjacencyList[v1].length ) {
// // // // // // // //             let poped = this.adjacencyList[v1].pop();
// // // // // // // //             this.removeEdge(v1,poped);
// // // // // // // //          };

// // // // // // // //          delete this.adjacencyList[v1];
// // // // // // // //     };

// // // // // // // //     dfs ( start ,  visited = new Set() )  {

// // // // // // // //         visited.add(start);
// // // // // // // //         console.log(start);

// // // // // // // //         for ( let neigh of this.adjacencyList[start] ) {
// // // // // // // //             if ( !visited.has(neigh) ) {
// // // // // // // //                 this.dfs(neigh, visited);
// // // // // // // //             }
// // // // // // // //         };

// // // // // // // //     };



// // // // // // // // };


// // // // // // // // const graph = new Graph();
// // // // // // // // graph.addVertex("V");
// // // // // // // // graph.addVertex("W");
// // // // // // // // graph.addVertex("X");
// // // // // // // // graph.addVertex("Y");
// // // // // // // // graph.addVertex("Z");

// // // // // // // // graph.addEdge("V","W");
// // // // // // // // graph.addEdge("W","X");
// // // // // // // // graph.addEdge("Y","Z");
// // // // // // // // graph.dfs("V");




// // // // // // // //directed graph 

// // // // // // // class Graph {
// // // // // // //     constructor() {
// // // // // // //         this.adjacencyList = {};
// // // // // // //     };

// // // // // // //     addVertex(v) {
// // // // // // //         if (!this.adjacencyList[v]) {
// // // // // // //             this.adjacencyList[v] = [];
// // // // // // //         };
// // // // // // //     };

// // // // // // //     addEdge(v1, v2) {
// // // // // // //         if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
// // // // // // //             return;
// // // // // // //         };

// // // // // // //         this.adjacencyList[v1].push(v2);
// // // // // // //     };


// // // // // // //     removeEdge(from, to) {
// // // // // // //         if (!this.adjacencyList[from] || !this.adjacencyList[to]) {
// // // // // // //             return;
// // // // // // //         };

// // // // // // //         this.adjacencyList[from] = this.adjacencyList[from].filter((a) => a != to);
// // // // // // //     };

// // // // // // //     removeVertex(vertex) {
// // // // // // //         if (!this.adjacencyList[vertex]) return;

// // // // // // //         for (let neigh in this.adjacencyList) {
// // // // // // //             this.adjacencyList[neigh] = this.adjacencyList[neigh].filter((a) => a != vertex);
// // // // // // //         };

// // // // // // //         delete this.adjacencyList[vertex];
// // // // // // //     };


// // // // // // //     dfs(start, visited = new Set()) {
// // // // // // //         visited.add(start);
// // // // // // //         console.log(start);

// // // // // // //         for (let neigh of this.adjacencyList[start]) {
// // // // // // //             if (!visited.has(neigh)) {
// // // // // // //                 this.dfs(neigh, visited);
// // // // // // //             }
// // // // // // //         };
// // // // // // //     };


// // // // // // //     bfs( start ) {

// // // // // // //         let visited = new Set();
// // // // // // //         let queue = [];
// // // // // // //         visited.add(start);
// // // // // // //         queue.push(start);

// // // // // // //         while ( queue.length > 0 ) {
// // // // // // //             let current = queue.shift();
// // // // // // //             console.log(current);

// // // // // // //             for ( let neigh of this.adjacencyList[current] ) {
// // // // // // //                 if ( !visited.has(neigh) ) {
// // // // // // //                     visited.add(neigh);
// // // // // // //                     queue.push(neigh);
// // // // // // //                 }
// // // // // // //             };

// // // // // // //         }
// // // // // // //     }




// // // // // // // };


// // // // // // // const g = new Graph();

// // // // // // // g.addVertex("A");
// // // // // // // g.addVertex("B");
// // // // // // // g.addVertex("C");
// // // // // // // g.addVertex("D");
// // // // // // // g.addVertex("E");
// // // // // // // g.addVertex("F");

// // // // // // // g.addEdge("A", "B");
// // // // // // // g.addEdge("A", "C");
// // // // // // // g.addEdge("B", "D");
// // // // // // // g.addEdge("B", "E");
// // // // // // // g.addEdge("E", "F");


// // // // // // // // adj 
// // // // // // // // a = b, c
// // // // // // // // b = d, e, 
// // // // // // // // e = f 

// // // // // // // //dfs - a , b, d, e, f, c
// // // // // // // // bfs - a,b,c,d,e,f

// // // // // // // g.dfs("A");
// // // // // // // // g.bfs("A"); 



// // // // // // class Graph {
// // // // // //     constructor() {
// // // // // //         this.adjacencyList = {};
// // // // // //     };


// // // // // //     addVertex( v ) {
// // // // // //         if ( !this.adjacencyList[v] ) {
// // // // // //             this.adjacencyList[v] = [];
// // // // // //         };
// // // // // //     };


// // // // // //     addEdge ( v1, v2 ) {
// // // // // //         if ( !this.adjacencyList[v1] || !this.adjacencyList[v2] ) {
// // // // // //             return;
// // // // // //         };

// // // // // //         this.adjacencyList[v1].push(v2);
// // // // // //         this.adjacencyList[v2].push(v1);
// // // // // //     };


// // // // // //     removeEdge( v1,v2 ) {
// // // // // //         if ( !this.adjacencyList[v1] || !this.adjacencyList[v2] ) {
// // // // // //             return;
// // // // // //         };

// // // // // //         this.adjacencyList[v1] = this.adjacencyList[v1].filter((a) => a !== v2);
// // // // // //         this.adjacencyList[v2] = this.adjacencyList[v2].filter((a) => a !== v1);
// // // // // //     };


// // // // // //     dfs( start, visited = new Set() ) {
// // // // // //          visited.add(start);
// // // // // //          console.log(start);

// // // // // //          for ( let neigh of this.adjacencyList[start] ) {
// // // // // //             if ( !visited.has(neigh) ) {
// // // // // //                 this.dfs(neigh,visited);
// // // // // //             }
// // // // // //          }
// // // // // //     };



// // // // // //     bfs ( start ) {
// // // // // //         let queue = [];
// // // // // //         let visited = new Set();

// // // // // //         visited.add(start);
// // // // // //         queue.push(start);

// // // // // //         while ( queue.length > 0 ) {
// // // // // //             let current = queue.shift();
// // // // // //             console.log(current);

// // // // // //             for ( let neigh of this.adjacencyList[current] ) {
// // // // // //                 if ( !visited.has(neigh)) {
// // // // // //                     visited.add(neigh);
// // // // // //                     queue.push(neigh);
// // // // // //                 }
// // // // // //             }
// // // // // //         }
// // // // // //     };



// // // // // //     hasCycle(  ) {

// // // // // //         let visited = new Set();

// // // // // //         for ( let vertex in this.adjacencyList ){
// // // // // //             if (!visited.has(vertex) ) {
// // // // // //                 if ( this.bfsCheck( vertex,visited ) ) {
// // // // // //                     return true;
// // // // // //                 }
// // // // // //             }
// // // // // //         }
// // // // // //        return false;
// // // // // //     };


// // // // // //     bfsCheck( vertex, visited ) {
// // // // // //         let queue = [];
// // // // // //         visited.add(vertex);
// // // // // //         queue.push([vertex,null]);


// // // // // //         while ( queue.length > 0 ) {
// // // // // //             const [ node, parent ] = queue.shift();

// // // // // //             for ( let neigh of this.adjacencyList[node] ) {
// // // // // //                 if ( !visited.has(neigh) ) {
// // // // // //                     visited.add(neigh);
// // // // // //                     queue.push([neigh, node ]);
// // // // // //                 }else if ( neigh !== parent ) {
// // // // // //                     return true;
// // // // // //                 }
// // // // // //             }
// // // // // //         };

// // // // // //         return false;
// // // // // //     }
// // // // // // }




// // // // // class Graph {
// // // // //     constructor() {
// // // // //         this.adjacencyList = {};
// // // // //     };


// // // // //     addVertex( v ) {
// // // // //         if ( !this.adjacencyList[v] ) {
// // // // //             this.adjacencyList[v] = [];
// // // // //         };
// // // // //     };


// // // // //     addEdge( v1, v2 ) {
// // // // //         if ( !this.adjacencyList[v1] || !this.adjacencyList[v2] ) {
// // // // //             return;
// // // // //         };

// // // // //         this.adjacencyList[v1].push(v2);
// // // // //     };


// // // // //     removeEdge( v1, v2 ) {
// // // // //         if ( !this.adjacencyList[v1] || !this.adjacencyList[v2] ) {
// // // // //             return;
// // // // //         };

// // // // //         this.adjacencyList[v1] = this.adjacencyList[v1].filter((a) => a != v2);
// // // // //     };  

// // // // //     removeVertex ( v ) {
// // // // //         if ( !this.adjacencyList[v] ) return ;

// // // // //         for ( let vertex in this.adjacencyList ) {
// // // // //              this.adjacencyList[vertex ] = this.adjacencyList[vertex].filter((a) => a != v );
// // // // //         };

// // // // //         delete this.adja[v];
// // // // //     };


// // // // //     dfs ( start, visited = new Set() ) {
// // // // //         visited.add(start);
// // // // //         console.log(start);

// // // // //         for ( let neigh of this.adjacencyList[start] ) {
// // // // //             if ( !visited.has(neigh) ) {
// // // // //                 this.dfs(neigh,visited);
// // // // //             }
// // // // //         }
// // // // //     };


// // // // //     bfs ( start ) {
// // // // //         let queue = [];
// // // // //         let visited = new Set();
// // // // //         queue.push(start);
// // // // //         visited.add(start);

// // // // //         while ( queue.length >  0 ) {
// // // // //             let current = queue.shift();
// // // // //              console.log(current);

// // // // //              for ( let neigh of this.adjacencyList[current] ) {
// // // // //                 if ( !visited.has(neigh) ) {
// // // // //                     visited.add(neigh);
// // // // //                     queue.push(neigh);
// // // // //                 }
// // // // //              }
// // // // //         }
// // // // //     };



// // // // //     hasCycle () {
// // // // //         let visited  = new Set();

// // // // //         for ( let vertex in this.adjacencyList ) {
// // // // //             if (!visited.has(vertex) ) {
// // // // //                 if ( this.bfsCheck(vertex,visited)){
// // // // //                     return true;
// // // // //                 };
// // // // //             }
// // // // //         };

// // // // //         return false;
// // // // //     };


// // // // //     bfsCheck(start,visited) {

// // // // //         let queue = [];
// // // // //         visited.add(start);
// // // // //         queue.push([start,null]);

// // // // //         while ( queue.length > 0 ) {
// // // // //             let [ node , parent ] = queue.shift();

// // // // //             for ( let neigh of this.adjacencyList[node] ) {

// // // // //                   if ( !visited.has(neigh) ) {
// // // // //                     visited.add(neigh);
// // // // //                     queue.push([neigh,node]);
// // // // //                   }else if ( neigh !== parent ) {
// // // // //                     return true;
// // // // //                   }
// // // // //             }
// // // // //         };

// // // // //         return false;
// // // // //     }
// // // // // }; 



// // // // class TrieNode {
// // // //     constructor() {
// // // //         this.children = {};
// // // //         this.isEnd = false;
// // // //     };
// // // // };


// // // // class Trie {
// // // //     constructor() {
// // // //         this.root = new TrieNode();
// // // //     };


// // // //     insert ( word ) {
// // // //         let node = this.root;
// // // //         for ( let char of word ) {
// // // //             if ( !node.children[char] ) {
// // // //                 node.children[char] = new TrieNode();
// // // //             };

// // // //             node = node.children[char];
// // // //         };

// // // //         node.isEnd = true;
// // // //     };


// // // //     search ( word ) {
// // // //         let node = this.root;

// // // //         for ( let char of word ) {
// // // //             if (! node.children[char] ) {
// // // //                 return false;
// // // //             };

// // // //             node = node.children[char];
// // // //         };

// // // //         return node.isEnd;
// // // //     };


// // // //     prefix ( word ) {
// // // //         let node = this.root;

// // // //         for ( let char of word ) {
// // // //             if (!node.children[char] ) {
// // // //                 return false;
// // // //             };

// // // //             node = node.children[char];
// // // //         };

// // // //         return  true;
// // // //     };


// // // //     insertReverse( word ) {
// // // //         let reverse = word.split("").reverse().join("");
// // // //         let node = this.root;

// // // //         for ( let char of reverse ) {

// // // //              if ( !node.children[char] ) {
// // // //                 node.children[char] = new TrieNode();
// // // //              };

// // // //              node = node.children[char];

// // // //         }

// // // //         node.isEnd = true;
// // // //     };


// // // //     suffix( word ) {
// // // //         let node = this.root;
// // // //         let reverse = word.split("").reverse().join("");

// // // //         for ( let char of reverse ) {
// // // //             if ( !node.children[char] ) {
// // // //                 return false;
// // // //             };

// // // //             node = node.children[char];
// // // //         };

// // // //         return true;

// // // //     };


// // // //     auto ( word ) {
// // // //         let node = this.root;
// // // //         for ( let char of word ) {
// // // //             if (!node.children[char] ) {
// // // //                 return [];
// // // //             };

// // // //             node = node.children[char];
// // // //         };

// // // //         let result = [];

// // // //         const dfs = ( currentNode, currentWord ) => {

// // // //             if ( currentNode.isEnd == true ) {
// // // //                 result.push(currentWord);
// // // //             };


// // // //             for ( let char in currentNode.children ) {
// // // //                 dfs(currentNode.children[char], currentWord + char );
// // // //             };

// // // //         };

// // // //         dfs( node, word );
// // // //         return result;
// // // //     }



// // // // };


// // // // const t = new Trie();
// // // // t.insert("cat");
// // // // t.insert("cap");
// // // // t.insert("car");
// // // // t.insert("gap");
// // // // t.insert("cash");
// // // // console.log(t.prefix("ca"));
// // // // console.log(t.auto("ca"))




// // // // class MaxHeap {
// // // //     constructor() {
// // // //         this.arr = [];
// // // //     };

// // // //     getParent(index) {
// // // //         return Math.floor((index - 1) / 2);
// // // //     };
// // // //     getLeft(index) {
// // // //         return index * 2 + 1
// // // //     };

// // // //     getRight(index) {
// // // //         return index * 2 + 2
// // // //     };

// // // //     swap(i, j) {
// // // //         [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
// // // //     };

// // // //     insert(value) {
// // // //         this.arr.push(value);
// // // //         this.heapifyUp(this.arr.length - 1);
// // // //     };


// // // //     heapifyUp(index) {
// // // //         while (index > 0) {
// // // //             let parent = this.getParent(index);

// // // //             if (this.arr[index] > this.arr[parent]) {
// // // //                 this.swap(index, parent);
// // // //                 index = parent;
// // // //             } else {
// // // //                 break;
// // // //             }
// // // //         }
// // // //     };


// // // //     extractMax() {
// // // //         if (this.arr.length === 0) return null;
// // // //         if (this.arr.length === 1) {
// // // //             return this.arr.pop();
// // // //         };


// // // //         let max = this.arr[0];
// // // //         this.arr[0] = this.arr.pop();
// // // //         this.heapifyDown(0);
// // // //         return max;
// // // //     };


// // // //     heapifyDown(index) {
// // // //         let size = this.arr.length;


// // // //         while (true) {

// // // //             let largest = index;
// // // //             let left = this.getLeft(index);
// // // //             let right = this.getRight(index);

// // // //             if (left < size && this.arr[left] > this.arr[largest]) {
// // // //                 largest = left;
// // // //             };

// // // //             if (right < size && this.arr[right] > this.arr[largest]) {
// // // //                 largest = right;
// // // //             };


// // // //             if (largest !== index) {
// // // //                 this.swap(largest, index);
// // // //                 index = largest;
// // // //             } else {
// // // //                 break;
// // // //             }
// // // //         }
// // // //     }
// // // // }



// // // class General {
// // //     constructor(value) {
// // //         this.value = value;
// // //         this.children = [];
// // //     };
// // // };


// // // const node1 = new General(10);
// // // const node2 = new General(20);
// // // const node3 = new General(30);
// // // const node4 = new General(40);
// // // const node5 = new General(50);

// // // node1.children.push(node2, node3);
// // // node2.children.push(node4, node5);

// // // function post(node) {
// // //     if (!node) return;
// // //     for (let child of node.children) {
// // //         post(child);
// // //     };
// // //     console.log(node.value);
// // // };


// // // function pre(node) {

// // //     if (!node) return;
// // //     console.log(node.value);
// // //     for (let child of node.children ) {
// // //         pre(child);
// // //     };

// // // };


// // // function level(node) {
// // //     if (!node) return;
// // //     let queue = [node];

// // //     while (queue.length > 0) {
// // //         let current = queue.shift();
// // //         console.log(current.value);
// // //         for (let node of current.children) {
// // //             queue.push(node);
// // //         }
// // //     };

// // // };


// // // post(node1);
// // // pre(node1);
// // // level( node1);


// // class Bs {
// //     constructor( value) {
// //         this.value  = this.value;
// //         this.left = null;
// //         this.right = null;
// //     };
// // };


// // const b1 = new Bs(10);
// // const b2 = new Bs(20);
// // const b3 = new Bs(30);
// // const b4 = new Bs(40);
// // const b5 = new Bs(50);

// // b1.left = b2;
// // b1.right = b3;
// // b2.left = b4;
// // b2.right = b5;

// // function post ( node ) {
// //     if ( !node ) return ;
// //     if ( node.left ) {
// //         post(node.left);
// //     };

// //     if ( node.right ) {
// //         post(node.right);
// //     };

// //     console.log(node.value);
// // };


// // function pre ( node ) {
// //     if ( !node ) return;
// //     console.log(node.value);
// //     if ( node.left ) {
// //         pre(node.left);
// //     };

// //     if ( node.right ) {
// //         pre ( node.right);
// //     };
// // };


// // function inorder( node ) {
// //     if ( !node ) return;
// //     if ( node.left ) {
// //         inorder(node.left);
// //     };

// //     console.log(node.value);

// //     if ( node.right ) {
// //         inorder(node.right);
// //     }
// // };


// // function bfs ( node ) {
// //     if (!node) return;
// //     let queue = [ node];
// //     while ( queue.length > 0 ) {
// //         let current = queue.shift();
// //         console.log(current.value);

// //         if ( current.left ) {
// //             queue.push(current.left);
// //         };

// //         if ( current.right ) {
// //             queue.push(current.right);
// //         };
// //     }
// // };











// class Bst {
//     constructor ( value )  {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     };     


//     insert(value) {
//          if ( value < this.value) {
//             if ( this.left === null ) {
//                 this.left = new Bst(value)
//             }else{
//                 this.left.insert(value);
//             }
//          }else {
//             if ( this.right === null ) {
//                 this.right = new Bst(value);
//             }else {
//                 this.right.insert(value);
//             }
//          }
//     };


// };



 
class Graph {
    constructor() {
        this.adjacencyList = {};
        this.isEnd = false;
    };

    addVertex ( v ) {
        if ( !this.adjacencyList[v] ) {
            this.adjacencyList[v] = []
        }
    };


    addEdge ( v1, v2 ) {
        if ( !this.adjacencyList[v1] || !this.adjacencyList[v2] ) {
            return;
        };


        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    };


    removeEdge( v1, v2 ) {

         if ( !this.adjacencyList[v1] || !this.adjacencyList[v2] ) {
            return;
        };

        this.adjacencyList[v1] = this.adjacencyList[v1].filter((a) => a != v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((a) => a != v1);
    };

    removeVertex ( v ) {
        if (!this.adjacencyList[v] ) return;

        for ( let neigh of this.adjacencyList[v] ) {
            this.removeEdge(neigh,v);
        };

        delete this.adjacencyList[v];
    };

    dfs ( start , visited = new Set() ) {
         visited.add(start);
         console.log(start);

         for ( let neigh of this.adjacencyList[start] ) {
            if ( !visited.has(neigh) ) {
                this.dfs(neigh,visited);
            }
         }
    };


    bfs( start ) {
        let visited  = new Set();
        let queue = [];
        visited.add(start);
        queue.push(start);

        while ( queue.length > 0 ) {
            let current = queue.shift();
            console.log(current);

            for ( let neigh of this.adjacencyList[current] ) {
                   if ( !visited.has(neigh) ) {
                    visited.add(neigh);
                    queue.push(neigh);
                   }
            }
        }
    };


    hasCycle () {
        let visited = new Set();

        for ( let vertex in this.adjacencyList )  {
            if ( !visited.has(vertex) ) {
                if ( this.bfsCheck( vertex, visited )){
                    return true;
                }
            }
        };

        return false;
    };


    bfsCheck( node , visited ) {
        let queue = [];
        visited.add(start);
        queue.push([node,null]);

        while ( queue.length > 0 ) {
            let [ node, parent  ] = queue.shift();

            for ( let neigh of this.adjacencyList[node] ) {
                if ( !visited.has(neigh) ) {
                    visited.add(neigh);
                    queue.push([neigh,node]);
                }else if (  parent != node ) {
                    return true;
                }
            }
        };

        return false;
    }
};


const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addEdge("A","B");
g.addEdge("B","A");
g.addEdge("B","C");
g.addEdge("C","A");
g.dfs("A");
g.bfs("A");
console.log(g.hasCycle());
