class Node {
    constructor(value) {
        this.head = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {

        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode
            this.tail = newNode;
        }
        
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    print(){
        let temp = this.head;
        let output = '';
        while(temp){
            output += temp.head + " -> ";
            temp = temp.next;
        }
        console.log(output + "null");
    }

    pop(){
        let temp = this.head;
        let pre = this.head;
        while(temp.next!=null){
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--; 
    }

    unshift(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    shift(){
        this.head = this.head.next;
        this.length--;
    }

    getLast(){

        // console.log(this.tail.head);

        let temp = this.head;
        while(temp.next!=null){
            temp = temp.next;
        }
        console.log(temp.head);
    }

    getElementByIndex(index){
        if(index < 0 || index > this.length){
            console.log("Invalid index");
        }
        let temp = this.head;
        let count = 0;
        while(temp){            
            if(count === index){
                console.log(temp.head);
                return;
            }
            count++
            temp = temp.next;         
        }
        console.log(temp.head);
        
    }

    searchElementByData(data){
        let curr = this.head;
        let index = 0;

        while(curr){
            if(curr.head === data){
                console.log(`Data ${data} found at index : `,index);
                return index;
            }
            index++;
            curr = curr.next
        }

        return -1;
    }

    set(value,index){
        let temp = this.head;
        let count = 0;
        while(temp){            
            if(count === index){
                temp.head = value;
                return;
            }
            count++
            temp = temp.next;         
        }
    }

    insert(value,index){
        if(index < 0 || index > this.length){
            console.log("Invalid index");
        }
        else if(index === 0){
            this.unshift(value);
        }
        else if(index === this.length){
            this.push(value);
        }
        else{
            const newNode = new Node(value);
            let temp = this.head;
            let count = 0;
            while(temp){
                if(count === index-1){
                    newNode.next = temp.next;
                    temp.next = newNode;
                    this.length++;
                    return;
                }
                count++;            
                temp = temp.next;         
            }
        }
    }
}


const myLL = new LinkedList(10);

//console.log(myLL);

myLL.push(20);
myLL.push(30);
myLL.push(40);
myLL.push(50);
myLL.print()
//console.log(myLL);
myLL.pop();
//console.log(myLL);

myLL.print()

myLL.unshift(5);
myLL.print()

myLL.shift();
myLL.print()

myLL.getLast();

myLL.getElementByIndex(0);

myLL.searchElementByData(30)

myLL.set(39,3);
myLL.print()

myLL.insert(40,4);
myLL.print()