class HashTable{
    constructor(size){
        this.keyMap = new Array(size);
    }

    _hashFunction(key){
        let sum = 0
        const prime = 31
        for (let i = 0; i < Math.min(key.length, 100); i++){
            const charCode = key.charCodeAt(0) - 96
            sum = (sum * prime + charCode) % this.keyMap.length
        }
        return sum
    }

    set(key, value){
        const index = this._hashFunction(key)
        this.keyMap[index] = value
    }

    get(key){
        const index = this._hashFunction(key)
        return this.keyMap[index]
    }
}