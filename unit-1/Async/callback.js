// function aa(){
//     console.log("first");
// }

// setTimeout(aa, 2000);

// setTimeout(()=>{
//     console.log("second");
// }, 4000)

// let count = 0;
// let id = setInterval(()=>{
//     console.log("third");
//     count++;
//     if(count >= 5){
//         clearInterval(id);
//     }
// }, 3000)

// function roll(number, next){
//     setTimeout(()=>{
//         console.log("Roll. No. is ", number);
//         if(next){
//             next();
//     }
// }, 2000)
// }

// roll(1, ()=>{
//     console.log("Wait its getting downloaded");
//     roll(2, ()=>{
//         console.log("Wait its getting downloaded");
//         roll(3, ()=>{
//             console.log("Wait its getting downloaded");
//             roll(4, ()=>{
//                 console.log("Wait its almost over");
//                 roll(5);
//             },1000);
//         },4000);
//     },3000);
// }, 2200);

let ulTeam = ["Virat", "Rohit", "Dhoni", "Jadeja", "Bumrah"];;
let flutterTeam = ["Kartik", "Amit", "Satyarth", "Shivam", "Satyam"];

function showMenu(ulTeam, flutterTeam){
    console.log(add(ulTeam, flutterTeam));
}
function showMenu(ulTeam, flutterTeam){
    console.log(add(...ulTeam, ...flutterTeam));
}