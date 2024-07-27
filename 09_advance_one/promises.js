const promiseOne = new Promise(function(resolve, reject){
    // Do any async task
    // DB calls, cryptography, network calls
    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Bhanushree", email: "super@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})