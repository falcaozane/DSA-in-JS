class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BST{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.root = newNode;
        }
        else{
            this.insertNode(this.root,newNode);
        }
    }

    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode;
            }
            else{
                this.insertNode(root.left,newNode);
            }
        }
        else{
            if(root.right === null){
                root.right = newNode;
            }
            else{
                this.insertNode(root.right,newNode);
            }
        }
    }

    // In-order traversal (Left, Root, Right)
    inOrder() {
        this.inOrderTraversal(this.root);
    }

    inOrderTraversal(node) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    // Pre-order traversal (Root, Left, Right)
    preOrder() {
        this.preOrderTraversal(this.root);
    }

    preOrderTraversal(node) {
        if (node !== null) {
            console.log(node.value);
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }

    // Post-order traversal (Left, Right, Root)
    postOrder() {
        this.postOrderTraversal(this.root);
    }

    postOrderTraversal(node) {
        if (node !== null) {
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.value);
        }
    }

    // searching in BST 
    search(root,value){
        if(!root){
            return false;
        }
        else{
            if(root.value == value){
                return true;
            }else if(value < root.value){
                return this.search(root.left,value);
            }
            else{
                return this.search(root.right,value);
            }
        }
    }
}


const bst = new BST();


bst.insert(10);
bst.insert(5);
bst.insert(15);

console.log("In-order Traversal:");
bst.inOrder();    // Output: 5 10 15

console.log("Pre-order Traversal:");
bst.preOrder();   // Output: 10 5 15

console.log("Post-order Traversal:");
bst.postOrder();  // Output: 5 15 10

console.log(bst.search(bst.root,15));

