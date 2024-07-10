const name = "bhanu "
const repoCount = 50

// console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`)

const gameName = new String(`bhanu-shree-hm`)

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'))

const newString = gameName.substring(0, 4) // takes values only from 0
console.log(newString)

const anotherString = gameName.slice(-10, 5)// takes even -ve values which 
console.log(anotherString) // start from last

const newStringOne = "   bhanu  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://bhanu.com/bhanu%20shree"
console.log(url.replace('%20', '-'))

console.log(url.includes('bhanu'))

console.log(gameName.split('-'))