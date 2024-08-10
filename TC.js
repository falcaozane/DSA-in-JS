
function printItems(n){

    // O(n^2)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
           console.log(i+""+j)
        }   
    }

    // O(n)
    for (let k = 0; k < n; k++) {
        console.log(k)
    }

    // O(n^2 + n ) = O(n^2)
}

printItems(10);