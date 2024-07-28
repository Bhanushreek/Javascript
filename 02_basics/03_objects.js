// Singleton => If we declared as literals it's not singleton
// => If we declared as constructor it's singleton

// object literals
const mySym = Symbol("key1")

const Jsuser = {
    name: "Bhanu",
    "full name": "Bhanushree",
    age: 18,
    [mySym]: "mykey1",
    email: "xbuaxhoi@google.com",
    location: "Bhupendra Jogi",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// // console.log(Jsuser.fu) // cannot be accessed
// // console.log(typeof Jsuser.mySym)
// console.log(Jsuser[mySym])

Jsuser.email = "bdxwuho@google.com"
//Object.freeze(Jsuser)
Jsuser.email = "bdxwuho@galli.com"
// console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("Hello JS user!")
}
// console.log(Jsuser.greeting)
// console.log(Jsuser.greeting())

Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(Jsuser.greetingTwo())
console.log(Jsuser.greeting())