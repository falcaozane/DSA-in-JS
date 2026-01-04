class HashMap{
    constructor(){
        this.keyMap = {}
    }

    put(key, value){
        this.keyMap[key] = value
    }

    get(key){
        return this.keyMap[key]
    }

    remove(key){
        delete this.keyMap[key]
    }
}

const myHP = new HashMap();

myHP.put("name", "Huxley");
myHP.put("age", 24);
myHP.put("city", "New York");

console.log(myHP)

console.log("======================")

console.log(myHP.get("name"))
console.log(myHP.get("age"))
console.log(myHP.get("city"))

myHP.remove("age")

console.log("======================")

console.log(myHP)

