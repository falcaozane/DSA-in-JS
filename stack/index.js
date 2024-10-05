class Stack{

    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length===0;
    }

    size() {
        return this.items.length;
    }

    push(item){
        this.items = [...this.items,item]
        // or this.items.push(item)
    }

    pop(){
        if(this.isEmpty()){
            console.log("Stack is empty");
        }
        else{
            const lastItem = this.items.at(-1);
            this.items = this.items.slice(0,this.items.length-1)
            // or const lastItem = this.items.pop()

            return lastItem
        }
    }

    peek(){
        if(this.isEmpty()){
            console.log("Stack is empty");
        }
        else{
            const lastItem = this.items.at(-1);
            return lastItem
        }
    }

    print(){
        if(this.isEmpty()){
            console.log("Stack is empty");
        }
        else{
            for(let i=this.items.length-1;i>=0;i--){
                console.log("|_"+ this.items[i]+"_|");
            }
        }
    }

    swap(index1, index2) {
        // Check if indices are valid
        if (index1 < 0 || index1 >= this.items.length || index2 < 0 || index2 >= this.items.length) {
            console.log("Invalid indices for swap.");
            return;
        }

        // Swap the two elements using temp variable
        // const temp = this.items[index1];
        // this.items[index1] = this.items[index2];
        // this.items[index2] = temp;
        [this.items[index1],this.items[index2]] = [this.items[index2],this.items[index1]]
    }

    // Recursively reverse the stack using the swap function
    reverse(left = 0, right = this.items.length - 1) {
        if (left >= right) {
            return;
        }
        // Swap the leftmost and rightmost elements
        this.swap(left, right);

        // Recursively call to reverse the remaining elements
        this.reverse(left + 1, right - 1);
    }

    sortStack() {
        this.items.sort((a, b) => a - b); // asc for desc b-a
    }


    getMin() {
        if (this.isEmpty()) {
            console.log("Stack is empty.");
            return null;
        }
        return Math.min(...this.items);
    }

    getMax() {
        if (this.isEmpty()) {
            console.log("Stack is empty.");
            return null;
        }
        return Math.max(...this.items);
    }

    // Search for an element and return its index
    search(element) {
        const index = this.items.indexOf(element);
        if (index === -1) {
            console.log(`${element} not present in the stack.`);
            return -1;
        } else {
            console.log(`${element} present at index ${index}.`);
            return index;
        }
    }
}


const stack = new Stack()

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

stack.print()

console.log();

console.log("Minimum element in stack:", stack.getMin());
console.log("Maximum element in stack:", stack.getMax());


console.log();

console.log(" Popped element: ",stack.pop());

console.log("\n Top of the stack: ",stack.peek());

console.log();


console.log("Reversing the stack...");

// Reverse the stack using the recursive approach
stack.reverse();

console.log();
console.log("Reversed Stack:");
stack.print();

console.log();

console.log("Before swap:");
stack.print();

console.log();
console.log("Swapping elements...");
stack.swap(0, 1);

console.log();
console.log("After swap:");
stack.print();

console.log();

console.log("\nSorting stack in ascending order: \n");
stack.sortStack();
stack.print();

console.log();



// Searching for an element
stack.search(3); // Should print that 3 is found at index 2
stack.search(6); // Should print that 6 is not found in the stack

console.log();