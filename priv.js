// class User {
   
//   constructor(name) {
//     // invokes the setter
//     this.name = name;
//   }
//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value.length < 4) {
//       alert("Name is too short.");
//       return;
//     }
//     this._name = value;
//   }

// }

let arr =[1,2,3,4,5,6,7,8,9,10]

console.log(arr.__proto__ === Array.prototype);