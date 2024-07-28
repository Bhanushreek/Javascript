const accountId = 14652
let accountEmail = "hbwjn@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2 //not allowed

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

accountEmail = "hdvhjd@gmail.com"
accountPassword = "212221"
accountCity = "Bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])