class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size ===0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        //const newNode = new Node(value);
        const newNode = new Node();
        newNode.data = value;
        
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    print(){
        let temp = this.head;
        while(temp){
            process.stdout.write(temp.data + " -> ");
            temp = temp.next;
        }
        console.log("null");
    }
}

let list = new LinkedList()

list.prepend(43);
list.prepend(45);
list.prepend(46);
list.print();