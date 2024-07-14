// Immediately invoked function Expressions (IIFE)

(function chai () {
    // named iife
    console.log(`DB CONNECTED`);
})(); // to end the iife

// to avoid the pollution of global scope we use iife

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('bhanu');