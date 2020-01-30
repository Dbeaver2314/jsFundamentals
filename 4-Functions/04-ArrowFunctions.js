// let hi = ()=>{
//     console.log('hello')
// }


 /* 
 all fat arrow functions need to be set a variable
 the fat arrow signifies that this is a function


    -arrow functions are the shorthand way to write a function expression, NOT decleration
    -Fat arrow functions do not get hoisted becasue they are function EXPRESSIONS
 
 */


 //Consise body arrow functions is one single line

//  let hi=() => console.log('hello');// return is implicit by default
//  hi()

 //Black Body

 let hi =()=>{
console.log('hello') // return keyword has to be present in a block body function
 }

 hi()

 let apples =num => console.log(`there are ${num} apples`)

 apples(10)


 let counting = num =>{
     for (let i=0; i<=num;i++)
        console.log(i)
 }
 counting(20);



 // if there are no parameters we have to have ()
 //if there is a single parameter () optional
 // if there are multiple paramenters () required