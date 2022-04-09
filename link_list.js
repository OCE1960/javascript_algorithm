class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
       this.head = new Node('head'); 
    }

    find(item) {
        let  current_node = this.head;
        while((current_node.element != item) && !(current_node.next == null)){
            current_node = current_node.next;
        }
        return current_node;
    }

    insert(new_element, item) {

        let current_node = this.find(item);
        let new_node = new Node(new_element);
        new_node.next = current_node.next;
        current_node.next = new_node;

    }

    remove() {

    }

    display() {

    }
}