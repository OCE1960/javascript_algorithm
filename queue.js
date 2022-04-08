class Queue{
    constructor(){
        this.data_store = [];
        this.back = 0;
    }

     enqueue(item) {
       return this.data_store[this.back++] = item;
    }

    dequeue() {

        if(this.back > 0){
            this.back--;
            return this.data_store.splice(0,1).join();
        }

        return "Empty Array";
    }

    peek() {

        if(this.back > 0) {
            return this.data_store[0];
        }

        return "Array is Empty"
    }

    clear() {
        delete this.data_store;
        this.back = 0;
        this.data_store = [];
    }

    queueSize() {
        return this.back;
    }

    getStore() {
        return this.data_store.join();
    }
}

let queue = new Queue();
console.log(queue.getStore());
queue.enqueue('PHP');
queue.enqueue('JAVA');
queue.enqueue('PYTHON');
queue.enqueue('RUBY');
console.log(queue.getStore());
console.log(queue.peek());
queue.dequeue();
queue.dequeue();
console.log(queue.getStore());
console.log(queue.queueSize());


