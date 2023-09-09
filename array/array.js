// const arr = [1,2,3,4,"Zane"]

// arr.push(5) // add at the last
// arr.unshift(0)


// for (const item of arr) {
//     console.log(item)
// }

// arr.pop() // remove last element
// arr.shift() // remove first element

// console.log();

// for (const item of arr) {
//     console.log(item)
// }

// objects are not iterables
// const obj = {
//     name: "Zane",
//     Rollno: 9603
// }

// obj.hobbey = "football"
// console.log(obj);
// console.log(obj.name);
// console.log(obj.Rollno);

// delete obj.hobbey
// console.log(obj);

// const set = new Set([1,2,3,4])

// set.add(5)
// console.log(set.has(3));
// set.delete(4)

// //set.clear()

// console.log(set.size);

// for (const item of set) {
//     console.log(item);
// }


const map = new Map(
    [
        ['a',1],
        ['b',2]
    ]
)

map.set('c',3)
console.log(map.has('a'));
console.log(map.size);

map.delete('a')
// map.clear()

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}


