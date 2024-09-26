class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    } 

    insertAtHead(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    insertAt(index,data){
        if(index < 0 || index > this.size){
            return "Index invalid"
        }

        if(index === 0){
            this.insertAtHead(data)
            return;
        }

        let newNode = new Node(data)
        let temp = this.head;
        for(let i=0;i<index-1;i++){
            temp = temp.next;
        }

        newNode.next = temp.next;
        temp.next = newNode;

        this.size++;
    }

    print(){
        let temp = this.head;
        let result = "";
        while(temp){
            result += `${temp.data}->`;
            temp=temp.next;
        }
        return result;
    }

    removeAtHead(){
        if(this.isEmpty()){
            return "List is already empty"
        }
        
        this.head = this.head.next;
        this.size--;
    }

    removeElement(data) {
        if (this.isEmpty()) {
            return "List is already empty";
        }
    
        let current = this.head;
        let prev = null;
    
        while (current) {
            if (current.data === data) {
                if (prev) {
                    prev.next = current.next;
                } else {
                    // If prev is null, it means we're removing the head
                    this.head = current.next;
                }
                this.size--;
                return current.data;
            }
            prev = current;
            current = current.next;
        }
    
        return -1;  // Data not found
    }

    deleteAt(index){
        if(index < 0 || index > this.size){
            return "Index invalid"
        }

        if(index === 0){
            this.removeAtHead()
            return;
        }

        let current = this.head;

        for(let i=0;i<index-1 && current!==null;i++){
            current = current.next;
        }
        
        if(current==null||current.next==null) return -1;

        let nodeToDelete = current.next;
        current.next = nodeToDelete.next;
        this.size--;
        return nodeToDelete.data;
    }

    searchElement(data){
        let curr = this.head;
        let index = 0;

        while(curr){
            if(curr.data === data){
                return index;
            }
            index++;
            curr = curr.next
        }

        return -1;
    }

    isEmpty(){
        this.size === 0;
    }

    getLength(){
        let len = 0;
        let temp = this.head;

        while(temp!==null){
            len++;
            temp = temp.next;
        }

        return len;
    }

    findMiddle(){
        let slow = this.head;
        let fast = this.head;

        while(fast!==null && fast.next!==null){
            fast = fast.next.next;
            slow = slow.next
        }

        return slow.data;
    }

    deleteMiddle(){
        // Edge case: If the list is empty or has only one element
        if (!this.head || !this.head.next) {
            this.head = null;  // Make the list empty if there's only one element
            this.size = 0;
            return;
        }
        let slow = this.head;
        let fast = this.head;
        let prev = null;

        while(fast!==null && fast.next!==null){
            fast = fast.next.next
            prev = slow
            slow = slow.next
        }

        prev.next = slow.next;
        this.size--;
    }

    swap(x,y){
        let temp = x.data;
        x.data = y.data;
        y.data = temp;
    }

    bubbleSort(){
        let swapped;
        let current;
        let last = null;

        if(!this.head || !this.head.next){
            return;
        }

        do {
            swapped=false;
            current = this.head;
            while(current.next!=last){
                if(current.data>current.next.data){
                    this.swap(current,current.next);
                    swapped=true;
                }
                current = current.next;
            }
            last = current;
        } while (swapped);
    }


}

let list = new LinkedList()

//console.log(list)
list.insertAtHead(43);
list.insertAtHead(50);
list.insertAtHead(34);
list.insertAt(2,46);
console.log(list.print())
//list.sort()
console.log("length of the linked list is: ",list.getLength())
console.log(list.findMiddle());
list.deleteMiddle();
console.log(list.print())
list.removeAtHead() // 34 will be removed it is delete element at begin
console.log(list.print())
list.deleteAt(4)
console.log(list.print());
list.removeElement(43); // 46 will be removed it is delete element by value
console.log(list.searchElement(50)) // 0
console.log(list.print())
