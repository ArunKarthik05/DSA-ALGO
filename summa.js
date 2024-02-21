// let userName = function showMessage() {
//   let userName = "Bob"; // (1) changed the outer variable

//   let message = 'Hello, ' + userName;
//   console.log(message)
//   return message;
// }
// console.log(userName())

// let ask = (question, yes, no) => confirm(question) ? yes() : no();
// ask(
// 'Do you agree?',
// () => console.log('You agreed'),
// () => console.log('You interrupted execution'),
// );
// Regular function taking two arguments
// function add(x, y) {
//     return x + y;
//   }
  
  // Curried version
//   function curriedAdd(x) {
//     return function(y) {
//       return x + y;
//     };
//   }
  
// const add2 = curriedAdd(2); // Fixing the first argument to 2
// console.log(add2(3))
//   console.log(add2(3)); // Output: 5

// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
  
//   let clone = Object.assign({}, user);
  
//   alert( user.sizes === clone.sizes ); // true, same object
  
//   // user and clone share sizes
//   user.sizes.width = 60;    // change a property from one place
//   alert(clone.sizes.width);
// Constructor function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   // Adding a method to the prototype
//   Person.prototype.sayHello = function() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   };
  
//   // Creating an instance of the Person object
//   let john = new Person("John", 30);
  
//   console.log(john.__proto__);
//   john.sayHello();        // Output: "Hello, my name is John and I am 30 years old."
  
  
// function sayHiBye(firstName, lastName) {

//     // helper nested function to use below
//     function getFullName() {
//       return firstName + " " + lastName;
//     }
  
//     alert( "Hello, " + getFullName() );
//     alert( "Bye, " + getFullName() );
  
//   }
//   sayHiBye( "John", "kjhg" ); 

// let obj = {
//     name:"Arun"
// }
// let obj2 ={
//     name:"Karthik"
// }
// function regularFunction() {
//     console.log(this.name);
// }
// regularFunction.call(obj)
// --------------BIND---------------
// let person1 = {
//     name: 'John',
//     greet: function() {
//       console.log(`Hello, my name is ${this.name}.`);
//     }
//   };
  
//   let person2 = {
//     name: 'Alice'
//   };
  
//   // Create a new function with the context of person2
//   let greetPerson2 = person1.greet.bind(person2);
//   greetPerson2()
// console.log(document.getElementById('p').outerHTML)

// const http = require('http');

// // Create a simple HTTP server
// const server = http.createServer((req, res) => {
//   // Set CORS headers
//   res.setHeader('Access-Control-Allow-Origin', '*'); // Allow access from any origin
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow specified methods
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specified headers

//   // Handle the request
//   if (req.method === 'OPTIONS') {
//     // Preflight request
//     res.writeHead(200);
//     res.end();
//   } else {
//     // Handle other requests
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ message: 'Hello from the server!' }));
//   }
// });

// // Start the server on port 3000
// server.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

// ------------------------BLOB------------------------

// let ab = new ArrayBuffer(2);
// let dataview = new DataView(ab);
// dataview.setInt8(0, 104)
// dataview.setInt8(1, 105)

// // console.log(ab)
// console.log(new Uint8Array(ab).toString())

// const blob = new Blob([ab],{type:'text/plain'})

// let f = new File([ab],'test.txt',{type:"text/plain"})

// let url = URL.createObjectURL(f)
// console.log(url)

// let a = document.createElement('a')
// a.href = url
// a.download = f.name
// a.textContent = `TEXT: ${f.name}`
// document.body.append(a)
// console.log(blob)

// // Step 1: Create HTML content
// const htmlContent = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Downloaded HTML File</title>
// </head>
// <body>
//     <h1>Hello, world!</h1>
//     <p>This is a downloaded HTML file created using Blob.</p>
// </body>
// </html>
// `;

// // Step 2: Create a Blob
// const Htmlblob = new Blob([htmlContent], { type: 'text/html' });
// let HtmlFile = new File([htmlContent],'test.html',{ type: 'text/html' });
// // Step 3: Create a URL for the Blob
// const blobUrl = URL.createObjectURL(HtmlFile);
// console.log(blobUrl)
// // Step 4: Create a link element
// const HtmlLink = document.createElement('a');

// // Step 5: Set the link's attributes
// HtmlLink.href = blobUrl;
// HtmlLink.download = HtmlFile.name;
// HtmlLink.textContent = `HTML: ${HtmlFile.name}`;
// console.log(HtmlLink)
// // Step 6: Append the HtmlLink to the document
// let br = document.createElement('br')
// document.body.append(br);
// document.body.append(HtmlLink);

// URL.revokeObjectURL(blobUrl);

// let uint8array = new Uint8Array(4);

// let num = 256;
// // alert(num.toString(2)); // 100000000 (binary representation)

// uint8array[0] = 33;
// uint8array[1] = 8;

// console.log(uint8array[0]); // 0
// console.log(uint8array[1]);

// let user ={
//   name:"Arun",
//   hi(){
//     console.log("hi")
//   }
// }
// Object.defineProperty(user,"name",{
//   value:"John",
//   enumerable:true,
//   configurable:true,
//   writable:false 
// })
// user.name = "arun"
// console.log(Object.getOwnPropertyDescriptors(user))
// let value = eval('let i = 0;i<10; i++');
// console.log(value);
// let hie = user.hi
// hie()


// -------------------BIGINT-------------------------
// debugger
// var u = 76
// let a = 10n
// let b = ""
// console.log(typeof(a))
// console.log( undefined == 1)
// debugger

let user ={
  name:"John"
}