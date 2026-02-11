// function add(...numbers){
//     let total =0;
//     for(let i of numbers){
//         total = total + i;
//     }
//     return total;
// }
// console.log(add(1,2,3,4,5));

// function add(...numbers){
//     let total =0;
//     for(let i in numbers){
//         total = total + numbers[i];
//     }
//     return total;
// }
// console.log(add(1,2,3,4,5));

// function add(...numbers){
//     let total =0;
//     for(let i=0;i<numbers.length;i++){
//         total = total + numbers[i];
//     }
//     return total;
// }
// console.log(add(1,2,3,4,5));

// let a = [1,2,3,34,45,88];
// let [first,sec, ...last] = a;
// console.log(first,sec,...last); 

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [...arr1,...arr2];
// console.log(arr3);


const number = (n) =>{
    if(n%2==0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}
number(6);

const reverse = (str) =>{
    let rev = "";
    for(let i=str.length-1;i>=0;i--){
        rev = rev + str[i];
    }
    return rev;
}
console.log(reverse("kartik"));

const average = (...numbers) =>{
    let total =0;
    for(let i in numbers){
        total = total + numbers[i];
    }
    return total/numbers.length;
}
console.log(average(1,2,3,4,5));