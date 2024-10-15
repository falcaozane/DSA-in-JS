// link : https://leetcode.com/problems/remove-linked-list-elements/

// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Class to represent the linked list and perform operations
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Function to add elements to the end of the linked list
    insert(val) {
        const newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Function to remove elements from the list based on value
    removeElements(val) {
        const dummy = new ListNode(0); // Dummy node
        dummy.next = this.head;
        let curr = dummy;

        // Traverse the list and remove nodes with matching value
        while (curr.next !== null) {
            if (curr.next.val === val) {
                curr.next = curr.next.next;
            } else {
                curr = curr.next;
            }
        }
        this.head = dummy.next; // Update head after removals
    }

    // Helper function to convert the list to an array (for easy visualization)
    toArray() {
        const arr = [];
        let current = this.head;
        while (current !== null) {
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
}

// Testing the implementation

// Create a new LinkedList
const linkedList = new LinkedList();

// Insert elements into the linked list
const headArray = [1, 2, 6, 3, 4, 5, 6];
for (let num of headArray) {
    linkedList.insert(num);
}

console.log("Original List:", linkedList.toArray()); // Output original list

// Remove elements with value 6
linkedList.removeElements(6);

// Print the updated list after removing elements
console.log("Updated List after removing 6:", linkedList.toArray());
