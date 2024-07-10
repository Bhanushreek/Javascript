// Primitive

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

/* JavaScript is a dynamically typed language. 
Because data type will automatically assigned at the time of compilation or code execution.
*/

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId)

// Refrence (Non-primitive)

// Array, Objects, Functions

const fruits = ["apple", "banana", "grapes"];
let myObj = {
    name: "bhanu",
    age: 18,
}

const myFuntion = function(){
    //console.log("Hello world!");
}

// console.log(typeof {variable}) => gives datatype

/*
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack memory (Primitive), Heap memory (Non-primitive)

let myYoutubeName = "bhans"
let anotherName = myYoutubeName

anotherName = "teaandpuri"

// console.log(myYoutubeName)
// console.log(anotherName)

let userOne = {
    email: "user1@google.com",
    upi: "user@ybl",
}

let userTwo = userOne
userTwo.email = "user2@google.com"

console.log(userOne.email)
console.log(userTwo.email)