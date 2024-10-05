class Stack{

    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length===0;
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
}


const stack = new Stack()

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

stack.print()

console.log();
console.log("Popped element: ",stack.pop());

console.log("Top of the stack: ",stack.peek());

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