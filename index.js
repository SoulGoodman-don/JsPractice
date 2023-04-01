// console.log("vlad")
// let arr = ['apple', 'orange', 'kiwi']
// arr.pop('kiwi')
// arr.push('lemon')
// arr.unshift('banan')
// arr.shift()
// console.log(arr)
// let bla = 'hello'
// console.log(bla[1])

// let toString = arr.toString()
// console.log(toString)

// let ToString = arr.join()
// console.log(ToString)

// let arrToString = arr.join(' and ')

// console.log(arr[0], arr[1], 'and', arr[2])


// let mtr = []
// mtr[0] = 'a'
// mtr[1] = 'b'
// console.log(mtr)

// let obj = { a: 'banan', b: 5, c: ['apple', 'orange', 'kiwi'], d:6 }
// console.log(obj['b'] + obj['d'])


// let week = {
//     1: "monday",
//     2: "tuesday",
//     3: "wednesday",
//     4: "thursday",
//     5: "friday",
//     6: "saturday",
//     7: "sunday",
//   };
//   console.log(week['6'])


//   let fruits = ['apple', 'orange', 'kiwi']
// for(let fruit of fruits){
//     console.log(fruit + ' fruit')
// }


// for(let i = 0; i <= 5; i++){
//     console.log(i)
// }

let colors = ["Blue", "Yellow", "Red"];
let str = 'Hello World'
let newStr = str.toLowerCase()
console.log(newStr)


let count = str.length
console.log(count)


let arrcount = colors.length
console.log(arrcount)

let arr = ['kiwi','orange','apple']
arr.splice(0, 2, 'apple')
console.log(arr)


let newarr = arr.slice(0, 2)
console.log(newarr)

let text = 'Hello World !'
let newtext = text.split(' ',3)

console.log(newtext)



for(let fruit of arr){
    console.log(fruit, '!')
}


let obj = { a: 20, b: 10, colors: ["red", "yellow", "blue"] };
let sum = obj['b'] + obj['a']
let color = obj['colors'] [2]
console.log(sum)
console.log(color)
