class LinkList {

    constructor(){

        this.list_size = 0;
        this.pos = 0;
        this.data_stores = [];
    }

    clear(){
        delete this.data_stores;
        this.list_size = 0;
        this.pos = 0;
        this.data_stores = [];
        return this.data_stores;
    }

    next(){

        if(this.curPos()  <  this.length() - 1 ){
 
            return ++this.pos;
           // return this.data_stores[++this.pos];
        }

        return this.length() - 1;
    }

    prev(){

        if(this.curPos() > 0){
           return --this.pos;
           // return this.data_stores[--this.pos];
        }

        return 0;

    }

    curPos(){

        return this.pos;
    }

    front(){

        if(this.list_size > 0){
            return   this.pos = 0;
        }
        return  "An Empty List";
    }

    end() {

        if(this.list_size > 0){
         return   this.pos = this.list_size - 1;
        }
        return "An Empty List";
    }

    add(element){

        this.data_stores[this.list_size++] = element;

    }

    remove(item){

        const item_pos = this.contains(item);

        if(item_pos != -1){
            const removed_item =  this.data_stores.splice(item_pos, 1);
            --this.list_size
             return item_pos + ": " +  removed_item.join();
        }

        return item + " does not exist in the Store";


    }


    getElement(){

        const item_pos = this.curPos();
        return  this.data_stores[item_pos];
       
       // if(item_pos != -1){
           // return item_pos + ": "+ this.data_stores[item_pos];
      //  }
       // return item + " does not exist in the Store";

    }

    getStore(){
        return this.data_stores;
    }

    length() {
        return this.list_size;
    }

    contains(element){

        for(let i = 0; i < this.length(); i++){
            if(element.toLowerCase() == this.data_stores[i].toLowerCase()){
                return i;
            }
        }

        return -1;

    }
}

let link_list = new LinkList();
link_list.add('okeke');
link_list.add('emeka');
link_list.add('christian');
link_list.add('Ndubuisi');
console.log('Size of List: ', link_list.length())
console.log(link_list.getStore());
console.log(link_list.getElement());
console.log(link_list.remove('Ndubuisi'));
console.log(link_list.getStore());
console.log(link_list.getElement());
link_list.next();
console.log(link_list.getElement());
link_list.next();
console.log(link_list.getElement());
link_list.prev();
console.log(link_list.getElement());
link_list.prev();
console.log(link_list.getElement());
