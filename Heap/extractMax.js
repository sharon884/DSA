class MaxHeap {
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
            let parrent = this.getParent(index);

            if (this.arr[index] > this.arr[parrent]) {
                this.swap(index, parrent);
                index = parrent;
            } else {
                break;
            }
        }
    };


    extractMax() {
        if (this.arr.length === 0) return null;
        if (this.arr.length === 1) {
            return this.arr.pop();
        };


        let max = this.arr[0];

        this.arr[0] = this.arr.pop();
        this.heapifyDown(0);
        return max;
    }

    heapifyDown(index) {

        let size = this.arr.length;
        while (true) {
            let largest = index;
            let left = this.getLeft(index);
            let right = this.getRight(index);

            if (left < size && this.arr[largest] < this.arr[left]) {
                largest = left;
            }

            if (right < size && this.arr[largest] < this.arr[right]) {
                largest = right;
            };


            if (largest !== index) {
                this.swap(largest, index);
                index = largest;
            } else {
                break;
            }

        }
    }

    display() {
        console.log(this.arr);
    };

}