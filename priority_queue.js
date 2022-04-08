
class Patient {

    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
}



class PriorityQueue{
    constructor(){
        this.data_store = [];
        this.back = 0;
        
    }

     enqueue(item) {
       return this.data_store[this.back++] = item;
    }


    dequeue() {

        if(this.back > 0){
            let priority = this.data_store[0].code;
            for(let i = 0; i < this.data_store.length; i++) {
                if(this.data_store[i].code < priority){
                    priority = this.data_store[i].code;
                }
            }
            this.back--;
            return this.data_store.splice(priority,1).join();
        }

        return "Empty Array";
    }

    peek() {

        if(this.back > 0) {
            let priority = this.data_store[0].code;
            for(let i = 0; i < this.data_store.length; i++) {
                if(this.data_store[i].code < priority){
                    priority = this.data_store[i].code;
                }
            }
            return this.data_store[priority];
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
        var retStr = "";
            for ( let i = 0; i < this.back; i++) {
            retStr += this.data_store[i].name + " code: "
            + this.data_store[i].code + "\n";
            }
            return retStr;
                }
}

let queue = new PriorityQueue();
p = new Patient('Andrew', 10)
//console.log(queue.getStore());
queue.enqueue(p);
p = new Patient('Peter', 23);
queue.enqueue(p);
p = new Patient('Samson', 2);
queue.enqueue(p);
p = new Patient('Verger', 1);
queue.enqueue(p);
console.log(queue.getStore());
//console.log(queue.peek());
queue.dequeue();
queue.dequeue();
console.log(queue.getStore());


