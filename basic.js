// function sum(a,b){
//     console.log(a+b)
// }

// sum(10.4,11.74)

// let a=function sub(a,b){
//  console.log(a-b)
// }

// a(345,215);

// let b = ()=>{
//     console.log('hello world')
// }

// b()

// let d = (a,b) => a**b;

// console.log(d(5,3))

// function callFun(aman){
//   return   aman(5,8);
// }
// function sum(a,b){
//     console.log(a+b)
// }

// callFun(sum)


// function getFun(){

//     function sub(a,b){
//         console.log(a-b)
//     }

//     return sub
// }

// let mycode=getFun()


// mycode()


function createCounter(){
    let cnt=0
    return function (){
        cnt++;
        return cnt
    }
}

let counter1=createCounter()
let counter2=createCounter()
console.log(counter1())
console.log(counter1())
console.log(counter1())
console.log(counter2())
console.log(counter2())
console.log(counter2())




