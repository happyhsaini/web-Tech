// (function show(){
//     console.log("Welcome to unit 1")
// })();
// //imediatory invoke function

const aa = (()=>{
    console.log("Welcome to CS8");
})();

aa();

function person(){
    this.age=25;

    setTimeout(function(){
        console.log("Age is ", this.age);
    }, 1000);
}
person();

function person1(){
    this.age=25;
    
    setTimeout(()=>
{
    console.log("Age is ", this.age);
},1000);
}
person1();