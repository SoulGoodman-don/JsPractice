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
// let str = 'Hello World'
// let newStr = str.toLowerCase()
// console.log(newStr)


// let count = str.length
// console.log(count)


// let arrcount = colors.length
// console.log(arrcount)

// let arr = ['kiwi','orange','apple']
// arr.splice(0, 2, 'apple')
// console.log(arr)


// let newarr = arr.slice(0, 2)
// console.log(newarr)

// let text = 'Hello World !'
// let newtext = text.split(' ',3)

// console.log(newtext)



// for(let fruit of arr){
//     console.log(fruit, '!')
// }


// let obj = { a: 20, b: 10, colors: ["red", "yellow", "blue"] };
// let sum = obj['b'] + obj['a']
// let color = obj['colors'] [2]
// console.log(sum)
// console.log(color)


let color = ["Blue", "Yellow", "Red", "white", "pink"];
color.splice(3, 2, 'green', 'black')
let colorToString = color.join(', ').length

console.log(color.length)

let obj = { colors: ["red", "yellow", "blue"], b: 20, c: 10 };
let sum = obj['b'] + obj['c']
console.log(sum)
console.log(obj)


let arrOfObj = [{ name: 'Jhon', age: 15 }, { name: 'Walter', age: 24 }, { name: 'Saul', age: 21 }]
let findAge1 = arrOfObj.find(item => item.age)
console.log(findAge1)

let newArr = [0, 1, "hello", { name: "Alex", age: 20 }, false];
console.log(newArr.indexOf(1))



console.log(color.includes('green'))


let arrOfObj1 = [
    { name: "Alex", age: 19, dog: false },
    { name: "Maria", age: 30, dog: true },
    { name: "John", age: 15, dog: false },
];
let findDog = arrOfObj1.map((item) => {
    if (item.dog == false) {
        console.log(item)
    }
})


let findAge = arrOfObj1.map((item) => {
    if (item.age > 20) {
        console.log(item)
    }
})
