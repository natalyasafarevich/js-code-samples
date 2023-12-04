

// ===================== Массивы =====================
 //* splice - добавляет, заменяет и удаляет
//splice(start, deleteCunt, em1,..em2) 
// deleteCount - индекс элемента, который необзодимо удалить
//? возвращает массив из удаленных элементов

// delete
let array= [1,2,3,5];
let splice_arr =array.splice(1,1); // начиная с 1, удалить 1
splice_arr // [2]
array // [ 1, 3, 5 ]

// replace
array.splice(0,1,'new value', 'new value 2') // начиная с 0, удаляем 1 и добавляем новые значения
array //[ 'new value', 'new value 2', 3, 5 ]


//* slice - возвращаем новый массив в котором копируются все элементы с индесом(start) до end(не вклчючается)
 //slice(start, end)

 let result = array.slice(0,2) // from 0 to 1
 result // [ 'new value', 'new value 2' ]


 //* concat - копирование массива
// contact(arg1, arg2)
let new_arr = array.concat(); // копирует массив создавая новую ссылку

let feat_arr = new_arr.concat([1,2],[1,2]) // добавит новые элементы в массив
feat_arr // [ 'new value', 'new value 2', 3, 5, 1, 2, 1, 2 ]

let arrayLike = {
  0: 'hello',
  1:"world",
  length:2
} 
let new_arr_2 =  array.concat(arrayLike)
new_arr_2 // [ 'new value','new value 2',3,  5,{ '0': 'hello', '1': 'world', length: 2 }]

 //* forEach - перебор каждого элемента
 new_arr_2.forEach((element) => {
  // console.log(element) 
 });

 
// ===================== Поиск =====================


//* indexOf(item, from) - ищет item начиная с инлекса from и возвращает номер индекса, или -1
//* lastIndexOf(item, from) - тоже самое, только справа налево

let arr = ['value 1','value 2','value 3','value 4','value 5']
arr.indexOf('value 5') // 4 - index
arr.indexOf('value 1') // 0` - index
arr.indexOf('value 0') // -1

//* includes(item, from) - возвращает true, если элемент есть в массиве, иначе false

arr.includes('value 2') // true
arr.includes(true) // false


//* find() - если true - прерывается и возвраает item, иначе undefined
//? находит 1-ый true и останавливается

let users =[
  {
    id:1,
    name: "Nate"
  },
  { 
    id:2,
    name:"Kate"
    },
]

let user=users.find((item)=>item.id === 1);
user // { id: 1, name: 'Nate' }


//* findIndex() - возвращает index

let index_user= users.findIndex(item=>item.name === "Kate");
index_user // 1


//* filter()  - вернет массив,  с элементами которые соответсвуют условию, иначе пустой массив
let filter_users = users.filter((item)=>item.id < 2)
filter_users // [ { id: 1, name: 'Nate' } ]



// ===================== Преобразование массива =====================

//* map - вызывается для каждого элемента и возвращает измененный массив

let nums = [1,2,3,4];
let update =nums.map((item)=>  item *2);
update // [ 2, 4, 6, 8 ]


//* sort 
 let new_num = [1,5,8,9,6,4];
 new_num.sort((a,b)=>a-b)
 new_num //[ 1, 4, 5, 6, 8, 9 ]
 //для строк
 let strs = ['Atom', "Map", "Gag", "Book"]
 strs.sort((a,b)=> a.localeCompare(b));
 strs //[ 'Atom', 'Book', 'Gag', 'Map' ]

//* reverse - пеерворачивает массив

//* split & join
//* split - разбивает строку на массив

let name="Georgia";
let split_name = name.split('');//['G', 'e', 'o', 'r', 'g', 'i','a'] - без пробела
split_name = name.split(' '); //[ 'Georgia' ] -- с пробелом

//* reduce()/rightReduce -используется для последовательного применения функции
//* к элементам массива с тем, чтобы свести их к одному значению

//? reduce(accumulator, current, index,array)
// accumulator - результат предыдушего вызова, при первом вызове initial(0)
// current - текущий элемент массива

let sum = [1,2,3,4,5]
//сложение
let result_sum =sum.reduce((accum,item)=>
{
  return accum+item
},1) // 1- начально значение, то есть 1-ый вызов функции -- 1+1, если установить 5 -- 5+1
result_sum // 16


//* Array.isArray
//* массивы это не отдельный тип данных, они основаны на объектах

typeof {} // object
typeof [] // object

// Чтобы проверить является ли массив - массивом

let cities=["Poznan","Minsk", "Tbilisi"]
Array.isArray(cities) // true
Array.isArray([]) // true

Array.isArray({}) // false


