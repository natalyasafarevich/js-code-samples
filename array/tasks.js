//Напишите функцию, которая фильтрует массив чисел и возвращает новый массив только с четными числами.

let numbers =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let even = numbers.filter((item)=> item % 2 ===0);

//? =====================================================================

// Создайте функцию, которая принимает массив строк и возвращает новый массив, содержащий длины этих строк.

let stings =['Hello','World',"Name","city"];
let lengthString = stings.map(item=> item.length);

//? =====================================================================

// Напишите функцию, которая принимает массив объектов и возвращает новый массив, 
//содержащий только объекты с определенным свойством.

let users =[
  {
    login:'user 1',
    age:18
  },  {
    login:'user 2',
    age:35
  },  {
    login:'user 3',
    age:8
  },  {
    login:'user 4',
    age:9
  },
];

function userAge (array){
  let legal_age = array.filter(user => user.age >= 18);
  return legal_age;
}

userAge(users);

//? =====================================================================

// Реализуйте функцию, которая объединяет несколько массивов в один массив без дубликатов элементов.
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [3, 4, 5];

function matrix (...arrays){
 let new_arr=[].concat(...arrays);

 let unicArray =new_arr.filter((item ,i)=>new_arr.indexOf(item) === i)
return unicArray;
}

matrix(arr1, arr2, arr3)

//? =====================================================================

//Напишите функцию, которая принимает массив объектов и возвращает новый массив, отсортированный по значению 
//определенного свойства объектов.

const usersU = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 30 }
];

function sortByProperty(arr, prop) {
return arr =  arr.sort((a,b)=>{
  if(typeof a[prop] === 'number'){
    return a[prop]-b[prop]
  }
  else{
    return a[prop].localeCompare(b[prop]);
      }
    }
  );
}
sortByProperty(usersU, 'age')

//? =====================================================================

//Создайте функцию, которая принимает два массива и возвращает новый массив, содержащий только элементы, 
//которые есть и в первом, и во втором массиве.

let arr_1 = [1, 2, 3, 4];
let arr_2= [3, 4, 5, 6];

function intersection(...arg) {

  let newArr = [].concat(...arg);
  console.log(newArr)
  let uniques = newArr.filter((item,i)=>newArr.indexOf(item)!== i)
  return uniques
//  ===
// return arr1.filter(item => arr2.includes(item));
}

let r = intersection(arr_1,arr_2);
console.log(r)

//? =====================================================================

//Напишите функцию, которая принимает массив объектов и возвращает объект, где ключами являются уникальные значения определенного
// свойства объектов, а значениями - массивы объектов с этим значением свойства.

//Реализуйте функцию, которая принимает массив чисел и возвращает новый массив, где каждый элемент представляет собой сумму всех 
// предыдущих элементов в исходном массиве.

//Напишите функцию, которая принимает двумерный массив чисел и возвращает новый массив, 
// где каждый элемент - это среднее значение чисел в каждом подмассиве.
const numberSum = [
  [2, 4, 6],
  [3, 5, 7],
  [1, 8, 9]
];

function averageArray(arr) {
 return arr.map((item)=>{
 if(Array.isArray(item)){
    return item.reduce((a,i)=>a+i )/ item.length
 }
  })
}
// Ожидаемый вывод: [4, 5, 6]
const result = averageArray(numberSum);

