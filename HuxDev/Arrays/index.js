class ZaneArray {

    constructor() {
        this.length = 0;
        this.data = {}; // object
    }

    zanePush(item) {
        this.data[this.length] = item;
        this.length++;

        // return this.length
    }

    zaneGet(index) {
        const getz = this.data[index];

        return getz
    }

    zanePop(){
        const poppedEl = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--;
        return poppedEl
    }

    zaneShift(){
        const el = this.data[0]
        delete this.data[0]

        for(let i=0;i<this.length;i++){
            this.data[i] = this.data[i+1];
        }

        delete this.data[this.length-1];

        this.length--;

        return el;
    }

    deleteZane(pos){

        const el = this.data[pos];

        delete this.data[pos];

        for(let i=pos;i<this.length;i++){ 
            this.data[i] = this.data[i+1];
        }

        delete this.data[this.length-1];

        this.length--;

        return el
    }
}

const myArray = new ZaneArray();

myArray.zanePush("Zane");
myArray.zanePush("is");
myArray.zanePush("awesome");
myArray.zanePush(1);

//console.log(myArray);

// for(let i=0;i<myArray.length;i++) {
//     console.log(myArray.data[i]);
// }

console.log(myArray.zaneGet(0));

console.log(myArray.zanePop())

// for(let i=0;i<myArray.length;i++) {
//     console.log(myArray.data[i]);
// }

console.log(myArray);

console.log(myArray.zaneShift());

console.log(myArray);
