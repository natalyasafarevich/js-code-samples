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
const obj1 = { a: 1, b: 2 };
const obj3 = { b: 3, c: 4 };
// Ожидаемый результат: { a: 1, b: 3, c: 4 }

function joinObj(...arg){
return Object.assign({}, ...arg)
}
let ares = joinObj(obj1, obj3);


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


