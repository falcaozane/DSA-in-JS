class Deque{
    constructor(){
        this.items = [];
        this.front = 0;
        this.rear = 0;
    }

    isEmpty(){
        return this.front === this.rear;
    }

    enqueueRear(item){
        this.items.push(item);
        this.rear++;
    }

    enqueueFront(item){
        if(this.front>0){
            this.front--;
            this.items[this.front] = item
        }
        else{
            this.items.unshift(item)
            this.rear++;
        }
    }

    dequeueFront(){
        if(this.isEmpty()){
            console.log("Deque is empty")
            return null
        }
        else{
            const item = this.items[this.front];
            delete this.items[this.front];
            this.front++;
            return item;
        }
    }

    dequeueRear(){
        if(this.isEmpty()){
            console.log("Deque is empty")
            return null
        }
        else{
            this.rear--;
            const item = this.items[this.rear];
            delete this.items[this.rear]
            return item
        }
    }

    peekFront() {
        if (this.isEmpty()) {
            console.log("Deque is empty");
            return null;
        } else {
            return this.items[this.front];
        }
    }

    // Peek the rear element
    peekRear() {
        if (this.isEmpty()) {
            console.log("Deque is empty");
            return null;
        } else {
            return this.items[this.rear - 1];
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log("----------------");
            console.log("Deque is empty");
            console.log("----------------");
        } else {
            const contents = [];
            let index = this.front;
            while (index < this.rear) {
                contents.push(this.items[index]);
                index++;
            }
            console.log("----------------");
            console.log(contents);
            console.log("----------------");
        }
    }
}

// Example usage
const deque = new Deque();

deque.enqueueRear(1);
deque.enqueueRear(2);
deque.enqueueRear(3);
deque.enqueueRear(4);
deque.enqueueRear(5);

deque.print(); // Output: [1, 2, 3, 4, 5]
console.log("\nAdding element to the from the front of the queue\n")
deque.enqueueFront(0); // Add 0 to the front
deque.print(); // Output: [0, 1, 2, 3, 4, 5]
console.log("\nRemoving element from the front of the queue\n")
console.log(deque.dequeueFront()); // Output: 0
deque.print(); // Output: [1, 2, 3, 4, 5]
console.log("\nRemoving element from the end of the queue\n")
console.log(deque.dequeueRear()); // Output: 5
deque.print(); // Output: [1, 2, 3, 4]

console.log(deque.peekFront()); // Output: 1
console.log(deque.peekRear());  // Output: 4