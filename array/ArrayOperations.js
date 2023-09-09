let array = [1,2,3,4,5]

console.log(array);

array.push(6);

for (let i=0;i<array.length;i++) {
    document.write(array[i]+`<br/>`);
}


console.log(array);

function getElement(){
    const element = document.getElementById("number").value;
    const position1 = document.getElementById("position1").value;
    const position2 = document.getElementById("position2").value;
    position2 = parseInt(position2);

    alert(`Your number is ${element} and position to be inserted at: ${position1}`);

    insertElement(element,position1);
    deleteElement(position2);
    
}

function insertElement(num,pos){
    let arraySize = array.length;
    if(pos > arraySize){
        alert("insertion not possible");
    }

    for(let j = arraySize;j>=0;j--){
        if(j>=pos){
            array[j+1] = array[j];
            if (j==pos) {
                array[j] = num;
            }
        }
    }
}

function display(){
    for (let i=0;i<array.length-1;i++) {
        document.write(array[i]+`<br/>`);
    }
}


function deleteElement(pos){

    for(let i=pos;i<array.length-1;i++){
            array[i]=array[i+1];
    }
    array.length=array.length-1;
}

let items = [11,22,33,44,55];

items.splice(5,0,66)

console.log(items);