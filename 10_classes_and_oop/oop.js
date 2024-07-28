const user = {
    username: "Bhanu",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User (username, loginCount, isLoggedIn) {
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`Welcome to JS ${this.username}`);
    }

    return this
}

const userOne = new User("Bhanu", 11, true);
const userTwo = new User("Chai", 12, false);
console.log(userOne.constructor);
// console.log(userTwo);