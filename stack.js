class Stack {
    constructor(){
        this.top = 0;
        this.data_store = [];
    }

    pop(){

        if(this.top > 0){
         return this.data_store.splice(--this.top,1).join();
        }

        return 'Empty Array';

    }

    push(item){
        this.data_store[this.top++] = item;
    }

    peek(){

        if(this.top > 0){
            return this.data_store[this.top - 1];
        }

        return 'Empty Array';

    }

    clear(){
        delete this.data_store;
        this.top = 0;
        this.data_store = [];
    }

    getStore() {
        return this.data_store;
    }

    isEmpty(){
        if(this.data_store.length == 0){
            return true;
        }
        return false;
    }


}

let stack = new Stack();
 stack.push('FUTO');
stack.push(['IMSU', 'NEKEDE']);
console.log(stack.getStore());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
stack.push('FUTO');
stack.push(['FUTA', 'NEKEDE']);
stack.push('FUTO');
stack.push(['FUTMINNA', 'NEKEDE']);
console.log(stack.getStore());
stack.clear()
console.log(stack.getStore()); 

