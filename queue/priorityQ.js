class PriorityQueue {
    constructor() {
        this.items = [];
    }

    // Check if the priority queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Enqueue method to add an element with priority
    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;

        // Insert element based on priority
        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        // If not added, add it at the end
        if (!added) {
            this.items.push(queueElement);
        }
    }

    // Dequeue method to remove the element with the highest priority (lowest number)
    dequeue() {
        if (this.isEmpty()) {
            console.log("Priority Queue is empty");
            return null;
        }
        return this.items.shift();
    }

    // Peek method to get the element with the highest priority without removing it
    peek() {
        if (this.isEmpty()) {
            console.log("Priority Queue is empty");
            return null;
        }
        return this.items[0];
    }

    // Print the contents of the priority queue
    print() {
        if (this.isEmpty()) {
            console.log("----------------");
            console.log("Priority Queue is empty");
            console.log("----------------");
        } else {
            const contents = this.items.map(item => `${item.element} [Priority: ${item.priority}]`);
            console.log("----------------");
            console.log(contents.join(", "));
            console.log("----------------");
        }
    }
}

// Example usage
const priorityQueue = new PriorityQueue();

priorityQueue.enqueue("Task A", 2);
priorityQueue.enqueue("Task B", 1);
priorityQueue.enqueue("Task C", 3);
priorityQueue.enqueue("Task D", 1);

priorityQueue.print(); // Output: Task B [Priority: 1], Task D [Priority: 1], Task A [Priority: 2], Task C [Priority: 3]

console.log("Dequeued: ", priorityQueue.dequeue().element); // Output: Task B (Priority 1)
priorityQueue.print(); // Output: Task D [Priority: 1], Task A [Priority: 2], Task C [Priority: 3]

console.log("Peek: ", priorityQueue.peek().element); // Output: Task D (Priority 1)

priorityQueue.print();
