const { type } = require("os");

class a{
    _name;
    #x;
    constructor(name){
        this._name = name;
    }
    setX(value){
        this.#x = value;
    }
    getX(){
        return this.#x;
    }
};

class B extends a{
    printName(){
        console.log(this._name);
    }
}
let ab = new a();
ab.setX("Arun")

let obj2 = new B("Ajay");
console.log(obj2)
obj2.printName();

console.log(typeof(object))
console.log(ab.getX());