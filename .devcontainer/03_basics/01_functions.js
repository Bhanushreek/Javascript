function sayMyName() {
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("U");
}

// sayMyName()

// function addTwoNumbers(number1, number2) { // parameters
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 4) // arguements
// addTwoNumbers(3, "4") // => 34
// addTwoNumbers(3, "a") // => 3a
// addTwoNumbers(3, null) // => 3

function addTwoNumbers(number1, number2) { // parameters
    // let result = number1 + number2
    // return result

    return number1 + number2
}

let result = addTwoNumbers(3, 5)
// console.log("Result: ", result)

function loginUserMessage(username) { // to pass default value (username = "sam")
    if(username === undefined) // if(!username)
    {
        console.log(`Please enter a username`);
        return
    }
    return `${username} just logged in!`
}

// console.log(loginUserMessage("Bhanu"))
// console.log(loginUserMessage())

function calculateCartPrice(...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 300, 500)); // => gives values as an array

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 300, 500, 2000));

const user = {
    username: "bhanu",
    price: 199 
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1, 2, 3, 4]));