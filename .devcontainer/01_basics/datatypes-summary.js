// Primitive

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

/* JavaScript is a dynamically typed language. 
Because data type will automatically assigned at the time of compilation or code execution.
*/

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// Refrence (Non-primitive)

// Array, Objects, Functions

const fruits = ["apple", "banana", "grapes"];
let myObj = {
    name: "bhanu",
    age: 18,
}

const myFuntion = function(){
    console.log("Hello world!");
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