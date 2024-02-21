class Admin {
    #password;
    constructor(name,password){
        this._name = name;
        this.#password = password;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
    resetPassword(newPass){
        this.#password = newPass;
        console.log(`Password changed to ${this.#password}.`);
    }
};
class User extends Admin{
    static #totalUsers =0;
    constructor(data,name,password){
        super(name,password);
        this.customData = data;
        User.#totalUsers++ ;  
    }
    accessAdminData(){
        console.log(this.name);
    }
    static getTotalUsers() {
        return User.#totalUsers;
    }
}
const user1 = new User("Admin");
const user2 = new User("Abhi");
console.log(User.getTotalUsers());

const data1 = new Admin("Ajay");
const data2 = new Admin("Arun");


// const obj ={
//     name : "Object2",
//     __proto__:Person.prototype
// }
// function Say(){
//     console.log("hi")
// }
// console.log(Say.prototype)
// // obj.__proto__ = Array.prototype
// obj.sayHello();
// console.log(obj.__proto__);
// console.log(Function.prototype)
// const inh = Object.create(obj);
// console.log(inh)
// let john = new Person("John");
// john.name = "Arun";

// console.log(Person.prototype);
// console.log(Object.getPrototypeOf(Person))
// console.log(obj.prototype);

