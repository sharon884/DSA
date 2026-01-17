class MinHeap {
    constructor() {
        this.arr = [];
    };

    getParent(index) {
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

            let parent = this.getParent(index);

            if (this.arr[index] < this.arr[parent]) {
                this.swap(index, parent);
                index = parent;
            } else {
                break;
            }
        }
    };


    extractMin() {
        if (this.arr.length == 0) return null;
        if (this.arr.length === 1) {
            return this.arr.pop();
        };


        let min = this.arr[0];
        this.arr[0] = this.arr.pop();
        this.heapifyDown(0);
        return min;
    };


    heapifyDown(index) {
        let size = this.arr.length;
        while (true) {
            let smallest = index;
            let left = this.getLeft(index);
            let right = this.getRight(index);

            if (left < size && this.arr[smallest] > this.arr[left]) {
                smallest = left;
            };

            if (right < size && this.arr[smallest] > this.arr[right]) {
                smallest = right;
            };


            if (smallest != index) {
                this.swap(index, smallest);
                index = smallest;
            } else {
                break;
            }
        }
    };


    display() {
        console.log(this.arr);
    }
};



const heap = new MinHeap();
heap.insert(10);
heap.insert(5);
heap.insert(20);
heap.insert(2);

heap.display();          // [2, 5, 20, 10]
console.log(heap.extractMin()); // 2
heap.display();          // [5, 10, 20]
