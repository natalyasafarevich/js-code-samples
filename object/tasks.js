// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

//     read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
//     sum() возвращает сумму этих свойств.
//     mul() возвращает произведение этих свойств.


function Calculator (){
  let a = +prompt("Write the first number",)
  let  b = +prompt("Write the second number",)
  this.read = function(){
    return {a, b}
  }
  this.sum = function(){
    return a+b
  }
  this.mul = function (){
    return a*b
  }
}

// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

//     Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
//     Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.

// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:

function Accumulator(startingValue){
this.value =startingValue;
this.read =function (){
  let a = +prompt('your number');
  return this.value +=a
}

}


// Преобразование массива в объект с использованием значений как ключей:
const arr = [10, 20, 30];
// Ожидаемый результат: { '10': 0, '20': 1, '30': 2 }

function transformArr (arr){
  return Object.fromEntries(arr.map((item, index)=>[item, index]))
}

let result = transformArr(arr);


// Группировка элементов массива в объект по определенному критерию:
// У вас есть массив объектов, нужно создать объект, где ключами будут 
// определенные свойства объектов, а значениями будут массивы объектов с одинаковыми значениями свойств.

const data = [
  { id: 1, type: 'A' },
  { id: 2, type: 'B' },
  { id: 3, type: 'A' },
];
// Ожидаемый результат: { 'A': [{ id: 1, type: 'A' }, { id: 3, type: 'A' }], 'B': [{ id: 2, type: 'B' }] }

function sortObj (arr){
 
}
let sort_result = sortObj(data)



const obj = { a: 1, b: 2, c: 3 };
// Ожидаемый результат: [1, 2, 3]
Object.values(obj);


const obj2 = { a: 1, b: 2, c: 3 };
// Ожидаемый результат: [['a', 1], ['b', 2], ['c', 3]]
Object.entries(obj2);



// Напишите функцию, которая принимает два или 
// более объекта в качестве аргументов и возвращает новый объект, содержащий слияние всех переданных объектов.
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
// Ожидаемый результат: { a: 1, b: 3, c: 4 }

function joinObj(...arg){
  let a={};
  arg.map((item)=>{
   for (let t in item){
    a[t] ?  a[t]+= item[t] : a[t]= item[t]
   }
  })
}
let ares = joinObj(objA, objB);


// Напишите функцию, которая принимает объект и возвращает количество его свойств.
const objt = { a: 1, b: 2, c: 3 };
// Ожидаемый результат: 3
function resultLength(obj){
  return Object.keys(obj).length
}
resultLength(objt)


// Напишите функцию, которая принимает объект и возвращает массив уникальных значений его свойств.
const objU = { a: 1, b: 2, c: 1 };
// Ожидаемый результат: [1, 2]

function uObj(obj){
let new_arr = []
  for(let key in obj){
    if(!new_arr.includes(obj[key])){
    new_arr.push(obj[key]);
    }
  }
return new_arr
}
uObj(objU)



const mySymbol = Symbol('description');
const objS = {
  [mySymbol]: 'Hello!'
};
// Получение значения по Symbol
// Ожидаемый результат: 'Hello!'
objS[mySymbol]


// https://www.codewars.com/kata/6524c2aa3256e887321d634e
function solve(cursed) {
  
  
  // Заменяем все найденные закрывающие скобки на пробелы
return JSON.parse(cursed.replaceAll(/\) *\(/g, ',')
.replace(/\)/g, '}')

.replace(/\(/g, '{')
.replace(/\ /g, ':')
 .replaceAll(/\w+/g, '"$&"')
 .replaceAll(/"(\d+)"/g, '$1')


)
}
solve('(monster (name Dragon) (age 2) (power (str 99) (dex 33)))')
const expected = {"monster":{"name":"Dragon","age":2,"power":{"str":99,"dex":33}}}





function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}
animal({name:"dog",legs:4,color:"white"})


function wordsToObject(input) {
 let arr = input.split(' ');
 let newArr = [];
 arr.reduce((acc, current, index,arr)=>{
if(index%2 === 0){
  const obh = {
    name: arr[index],
    id: arr[index+1]
  }
  newArr.push(obh)
  return acc;
}
 },[])
return newArr
// return  JSON.stringify(newArr)
}
let t =wordsToObject("red 1 yellow 2 black 3 white 4")
// "[{name : 'red', id : '1'}, {name : 'yellow', id : '2'}, {name : 'black', id : '3'}, {name : 'white', id : '4'}]"

// функцию findMax, которая принимает массив чисел и возвращает самое большое число из этого массива.
function findMax (arr){
 return arr.reduce((acc, current) =>{
  if(acc>current){
    return acc
  }
  else{
    return current
  }
 })
}
let res = findMax([5,3,6,5,4,88,55,99,103,5,4,3,105,9999]);
console.log(res)



const strings = ['apple', 'pear', 'banana', 'kiwi', 'orange'];
// Задача: Напиши функцию groupElementsByLength, которая принимает массив строк и возвращает объект, 
// где ключами являются разные длины строк, а значениями - массивы строк этой длины.
function groupElementsByLength(arr){
  arr.reduce((acc, current, index, arr)=>{
    // console.log(acc)
  })
}
groupElementsByLength(strings);
// Ожидаемый результат:
// {
//   '4': ['pear', 'kiwi'],
//   '5': ['apple'],
//   '6': ['banana', 'orange']
// }

// Подсчет символов в строке: Напиши функцию, которая принимает строку и возвращает объект, 
// в котором ключами будут символы строки, а значениями — количество вхождений каждого символа.

function countSymbols (word){
  let newW = word.split('');
  let newObj ={};
  
newW.map((item)=>{
  newObj[item]? newObj[item] += 1 : newObj[item] =1;
})
  return newObj
}

countSymbols('hello')



// Преобразование массива в объект с индексами: Создай функцию, которая принимает массив и возвращает объект,
//  где ключами будут индексы элементов массива, а значениями — сами элементы.

let awrr=  [
  { id: 1, name: 'John' },
  { id: 2, name: 'Alice' },
  { id: 1, name: 'Bob' },
  { id: 3, name: 'Sarah' }
]
function rr (arr){
  let t = {}
  arr =arr.reduce((acc,item,i)=>{
  t[item.id] ? t[item.id].push(item) :  t[item.id] = [item];
return acc
  },0)

return t
}
let td = rr(awrr)
// {
//   1: [
//     { id: 1, name: 'John' },
//     { id: 1, name: 'Bob' }
//   ],
//   2: [
//     { id: 2, name: 'Alice' }
//   ],
//   3: [
//     { id: 3, name: 'Sarah' }
//   ]
// }
// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// Ожидаемый результат: { a: 1, b: 3, c: 4 }

function joinObj(...arg){
  let a={};
  arg.map((item)=>{
   for (let t in item){
    a[t] ?  a[t]+= item[t] : a[t]= item[t]
   }
  })
return a
}
let aress = joinObj(objA, objB);



let mas=[['user',['name',"Yan"],['age','12']], ['banana',"f"]]
console.log(Object.fromEntries(mas))



function extend () {
  let arg= [...arguments];
  let obj = {};
  arg.forEach((item)=>{
    for (let key in item){
      if(Object.keys(obj).includes(key) ||  obj[key] === null || typeof item !== 'object' || Array.isArray(item) ){
        continue
      }
      obj[key] = item[key]
    }
  })
return obj
}
let ex = extend(  { a: 1, b: 2, length: 6 },
  [],
  'nope',
  false,
  [Function],
  { c: 3, a: 3 } ) 