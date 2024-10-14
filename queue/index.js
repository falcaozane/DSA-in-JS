class Queue{
    constructor(){
        this.items = []
        this.rear = 0
        this.front = 0
    }

    isEmpty(){
        return this.front===this.rear;
    }

    enqueue(item){
        this.items.push(item);
        this.rear++;
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is empty")
        }
        else{
            const item = this.items[this.front]
            delete this.items[this.front]
            this.front++
            return item
        }
    }

    peek(){
        if(this.isEmpty()){
            console.log("Queue is empty")
        }
        else{
            const item = this.items[this.front]
            return item
        }
    }

    print(){
        if(this.isEmpty()){
            console.log("----------------")
            console.log("Queue is empty")
            console.log("----------------")
        }
        else{
            const contents = []
            let index = this.front;
            while(index < this.rear){
                contents.push(this.items[index])
                index++
            }
            console.log("----------------")
            console.log(contents)
            console.log("----------------")
        }
    }
}

const q = new Queue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)

q.print()

console.log(q.dequeue())

q.enqueue(6)

q.print()

console.log(q.peek())

q.print()