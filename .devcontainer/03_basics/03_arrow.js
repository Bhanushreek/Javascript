const user = {
    username: "bhanu",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        // this refers current context in this case username
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this) // => gives empty {}, in browser global object is window object

// function chai() {
//     let username = "bhanu"
//     // console.log(this);
//     console.log(this.username);
// }
// chai()

// const chai = function() {
//     let username = "bhanu"
//     console.log(this.username)
// }
// chai()

const chai = () => {
    let username = "bhanu"
    // console.log(this.username)
    console.log(this) 
}
// chai()

// Difference between function and arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))

// const addTwo = (num1, num2) => (num1 + num2) // Implicit return
// console.log(addTwo(3, 4))

const addTwo = (num1, num2) => ({username: "bhanu"})
console.log(addTwo(3, 4))