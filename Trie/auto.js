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


//     insert(word) {
//         let node = this.root;
//         for (let char of word) {
//             if (!node.children[char]) {
//                 node.children[char] = new TrieNode();
//             };

//             node = node.children[char];
//         };

//         node.isEnd = true;
//     };


//     search(word) {
//         let node = this.root;
//         for (let char of word) {
//             if (!node.children[char]) {
//                 return false;
//             };

//             node = node.children[char];
//         }

//         return node.isEnd;
//     };

//     prefix(word) {
//         let node = this.root;
//         for (let char of word) {
//             if (!node.children[char]) {
//                 return false;
//             };

//             node = node.children[char];
//         };

//         return true;
//     };

//     insertSuffix(word) {

//         let node = this.root;

//         let reverse = word.split("").reverse().join('');

//         for (let char of reverse) {

//             if (!node.children[char]) {
//                 node.children[char] = new TrieNode();
//             };

//             node = node.children[char];
//         };

//         node.isEnd = true;
//     };

//     suffix(word) {

//         let node = this.root;

//         let reverse = word.split("").reverse().join("");

//         for (let char of reverse) {
//             if (!node.children[char]) {
//                 return false;
//             };

//             node = node.children[char];
//         };

//         return true;
//     };


//     autocomplete(prefix) {
//     let node = this.root;

//     // 1. Traverse to prefix node
//     for (let char of prefix) {
//         if (!node.children[char]) {
//             return []; // no suggestions
//         }
//         node = node.children[char];
//     }

//     let results = [];

//     // 2. DFS helper
//     const dfs = (currentNode, currentWord) => {
      
//         if (currentNode.isEnd) {
//             results.push(currentWord);
//         }
//        console.log(currentNode.children)
//         for (let char in currentNode.children) {
//             dfs(currentNode.children[char], currentWord + char);
//         }
//     };

//     // 3. Start DFS
//     dfs(node, prefix);

//     return results;
// }


// };


// const trie = new Trie();
// trie.insert("cat");
// trie.insert("car");
// trie.insert("care");
// trie.insert("dog");

// console.log(trie.autocomplete("ca"));


class TrieNode {
    constructor(){
        this.children = {};
        this.isEnd = false;
    };
};


class Trie {
    constructor() {
        this.root = new TrieNode();
    };


    insert ( word ) {
        let node = this.root;

        for ( let char of word ) {
            if ( !node.children[char] ) {
                node.children[char] = new TrieNode();
            };
            node = node.children[char];
        };

        node.isEnd = true;
    };


    search ( word ) {
        let node = this.root;

        for ( let char of word ) {
            if ( !node.children[char] ) {
                return false;
            };

            node = node.children[char];
        };

        return true;
    };


    prefix( word ) {
        let node = this.root;

        for ( let char of word ) {
            if ( !node.children[char] ) {
                return false;
            };

            node = node.children[char];
        };

        return true;
    };


    insertReverse( word ) {
        let node = this.root;

        let reverse = word.split("").reverse().join("");

        for ( let char of reverse ) {
            if ( !node.children[char] ) {
                node.children[char] = new TrieNode();
            };

            node = node.children[char];
        };

        node.isEnd = true;
    };


    suffix ( word ) {
        let node = this.root;
        let reverse = word.split("").reverse().join("");

        for ( let char of reverse ) {
            if ( !node.children[char] ) {
                return false;
            };

            node = node.children[char];
        };

        return true;
    };



    autoComplete ( word ) {

        let node = this.root;
        for ( let char of word ) {
            if (! node.children[char] ) {
                return [];
            };

            node = node.children[char];
        };

        let results = [];

        const dfs  = ( currentNode, currentWord ) => {
                          
            if ( currentNode.isEnd == true  ) {
                results.push(currentWord);
            };

            for ( let char in currentNode.children ) {
           
                dfs(currentNode.children[char], currentWord+char);
            };
        };

        dfs(node,word);

        return results ;
    };
};



const trie  = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("cap");
trie.insert("cash");
console.log(trie.autoComplete("ca"));