// "use strict";
// console.log("first");
// document.write("From js");

// var a=10;
// var a=20;
// console.log(a);

function hello(){
 if(true){
    const x=10;
    console.log("Inner",x);
 }
 console.log(x);
}
hello();

// consale.log(z);
// const z=10;
const arr=[1, 2, 3, 4, 5];
arr.push(6);
console.log(arr);