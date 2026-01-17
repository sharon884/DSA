class TrieNode {
    constructor () {
        this.children = {},
        this.isEnd = false;
    }
};


class Trie {
    constructor() {
        this.root = new TrieNode();
    };

    insert( word ) {
        let root = this.root;
        for ( let char of word ) {
            if ( !root.children[char] ) {

                root.children[char] = new TrieNode();
            };

            root = root.children[char];
        };
        root.isEnd = true;
    };
};

