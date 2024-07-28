function setUSerName (username) {
    // complex db calls
    this.username = username;
    console.log("called") // being called and the block is cleared from stack calls
    // so even the variables in it are disappeared. So to hold reference of variables
    // we use .call() function
}

function createUser (username, email, password) {
    setUSerName.call(this, username);
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);