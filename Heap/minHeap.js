class MinHeap {
    constructor() {
        this.arr = [];
    };


    getParrent(index) {
        return Math.floor((index - 1) / 2);
    };


    getLeft(index) {
        return Math.floor((index * 2) + 1);
    };


    getRight(index) {
        return Math.floor((index * 2) + 2);
    };


    swap(i, j) {
        [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
    };

    insert(value) {
        this.arr.push(value);
        this.heapifyUp(this.arr.length - 1);
    };


    heapifyUp(index) {
        while (index > 0) {
            let parrent = this.getParrent(index);

            if (this.arr[index] < this.arr[parrent]) {
                this.swap(index, parrent);
                index = parrent;
            } else {
                break;
            }
        }
    };


    display() {
        console.log(this.arr);
    };

};


const heap = new MinHeap();
heap.insert(10);
heap.insert(5);
heap.insert(20);
heap.insert(2);

heap.display();
