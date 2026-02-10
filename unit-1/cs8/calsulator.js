// const r1 = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })
// r1.question("Enter first number: ",
//     (num1) => {
//         r1.question("Enter second number: ",
//             (num2) => {
//                 const sum = Number(num1) +Number(num2);
//                 console.log(`The sum of ${num1} and ${num2} is ${sum}`);
                
//                 const sub = Number(num1) - Number(num2);
//                 console.log(`The difference of ${num1} and ${num2} is ${sub}`);
//                 r1.close();
//             }
//         )
//     }
// )



// const claculator =() => ({
//     add: (a,b) => a+b,
//     sub: (a,b) => a-b,
//     mul: (a,b) => a*b,
//     div: (a,b) => (b === 0 ? "Error: Division by zero" : a/b),
// })
// console.log(claculator().add(11,5));
// console.log(claculator().sub(10,5));
// console.log(claculator().mul(10,5));
// console.log(claculator().div(10,0));
 
const claculator =() =>({
    add: (a,b) => a+b,
    sub: (a,b) => a-b,
    mul: (a,b) => a*b,
    div: (a,b) => (b === 0 ? "Error: Division by zero" : a/b),
});
switch (operation){
    case 'add':
        console.log(claculator().add(num1,num2));
        break;
    case 'sub':
        console.log(claculator().sub(num1,num2));
        break;
    case 'mul':
        console.log(claculator().mul(num1,num2));
        break;
    case 'div':
        console.log(claculator().div(num1,num2));
        break;
}