class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    convertArr2LL(arr){

        if (arr.length === 0) return null; // Handle empty array case

        // Create the head of the list
        this.head = new Node(arr[0]); // array ke first element se head banaya
        let current = this.head;  // fir ek current pointer initialize kiya

        // Iterate through the rest of the array and add nodes
        for (let i = 1; i < arr.length; i++) { // 1 se kyu ki 0 pe head hai
            let newNode = new Node(arr[i]);
            current.next = newNode; // Link the current node to the new node
            current = current.next; // Move the current pointer to the new node
        }

        this.size = arr.length;
        return this.head;
    }

    printList() {
        let current = this.head;
        while (current) {
            process.stdout.write(current.data + " -> ");
            current = current.next;
        }
        console.log("null");
    }
}

let arr = [2,1,3,8]

let list = new LinkedList()

list.convertArr2LL(arr);
list.printList(); // Output: 2 -> 1 -> 3 -> 8 -> null