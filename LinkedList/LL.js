class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    append(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    print(){
        let temp = this.head;
        let output = '';
        while(temp){
            output += temp.data + " -> ";
            temp = temp.next;
        }
        console.log(output + "null");
    }
}

let list = new LinkedList()

list.prepend(43);
list.prepend(45);
list.prepend(46);
list.append(47);
list.append(48);
list.print();