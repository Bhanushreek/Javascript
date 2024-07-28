// Dates

let myDate = new Date()
// console.log(myDate.toString()); // Thu Jul 11 2024 06:02:09 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Thu Jul 11 2024
// console.log(myDate.toLocaleDateString()); // 7/11/2024
// console.log(myDate.toLocaleString()); // 7/11/2024, 6:02:09 AM
// console.log(myDate.toISOString()); // 2024-07-11T06:02:09.101Z
// console.log(myDate.toUTCString()); // Thu, 11 Jul 2024 06:02:09 GMT
// console.log(myDate.toTimeString()); // 06:02:09 GMT+0000 (Coordinated Universal Time)

// console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString())

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString())

 let myCreatedDate = new Date("2023-01-14") // or else ("01-14-2023")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000)) // converts into seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

newDate.toLocaleString('default', {
    weekday: "long"
})
console.log(newDate.toLocaleString())