class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    };
};


class Trie {
    constructor() {
        this.root = new TrieNode();
    };

    insert(word) {
        let current = this.root;
        for ( let char of word ) {
            if ( !current.children[char] ) {
                current.children[char] = new TrieNode();
            };
            
            current = current.children[char];
        };

        current.isEnd = true;
    };


    search( word ) {
        let current = this.root;
        for ( let char of word ) {
            if ( !current.children[char] ) {
                return false;
            };

            current = current.children[char];
        };

        return current.isEnd;
    };



    startWith( prefix ) {
        let current = this.root;

        for ( let char of prefix ) {
            if ( !current.children[char] ) {
                return false;
            };

            current = current.children[char];
        };

        return true;
    };


    insertPrefix( word ) {
        let reverse = word.split("").reverse().join("");
         let current = this.root;

         for ( let char of reverse ) {
            if ( !current.children[char] ) {
                current.children[char] = new TrieNode();
            };

            current = current.children[char];
         };

         current.isEnd = true;
    };


    endWith( suffix ) {

        let reversed = suffix.split("").reverse().join("");
        let current = this.root;

        for ( let char of reversed ) {
            if ( !current.children[char] ) {
                return false;
            };

            current = current.children[char];
        };

        return true;
    }
}