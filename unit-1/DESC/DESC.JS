// let number = [1,2,3,4,5];
// let [a,b,c,d,e]=number;
// console.log(a,b,c,d,e);

// const student ={
//  name: "kartik",
//  age: 33,
//  address: {
//     city: "Gzb",
//     state: "UP",
//     country: "India"
//  }   
// }
// // const {name:stuname ="Amit", age,
// //     address:{city}
// //  }=student;
// // // const name = student.name;
// // // const age = student.age;
// // console.log(stuname,age,city);

// function displaystu(object){

// console.log(`My name is ${object.name} and age is ${object.age}`);
// }
// // function displaystu({name,age}){

// // console.log(`My name is ${name} and age is ${age}`);
// // }
// displaystu(student);

let data = [1,2];
let [a=10,b=20]=data;
console.log(a,b);

let p =5;
let q =10;
[p,q] = [q,p];
console.log(p,q);
let color = ["red","green","blue"];
let[,,secondcolor] = color;
console.log(secondcolor);