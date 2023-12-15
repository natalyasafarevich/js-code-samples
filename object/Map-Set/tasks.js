// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

function unique(arr) {
let set = new Set(arr);
return [...set]
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

unique(values) // Hare,Krishna,:-O


let map = new Map();

map.set("name", "John");

let keys =[...map.keys()]
keys.push("more");


// Создайте Set, содержащий несколько чисел, и выведите его содержимое.

let number = new Set ([1,2,3,4,5,6,7,1]);
// console.log([...number])

// Создайте Map, где ключами будут имена фруктов, а значениями - их цены. Выведите значения Map.
let fruit = new Map();
fruit.set('banana', 12)
.set('apple', 4)
.set('orange', 12)
Object.fromEntries(fruit) // преобразование в обычный  объект 



// Создайте функцию, которая принимает строку и
//  возвращает Map, содержащий количество каждого символа в этой строке.

function countRepaet (str) {
  let map = new Map();
str =str.split("");

str.forEach((item)=>{
  if(!map.has(item)){
    map.set(item, 1)
  }
  else{
    map.set(item, map.get(item) +1 )
  }
})
return Object.fromEntries(map)
}
let result= countRepaet('hellooo')


// Используя Set, напишите функцию для проверки, содержит ли массив дубликаты.
let arrWithDuplicates = [1, 2, 3, 4, 1, 5];
function hasDuplicates (arr){
  let set = new Set(arr);
  
  return set.size === arr.length ? false : true
}

let resultWithDuplicates = hasDuplicates(arrWithDuplicates);
// console.log(resultWithDuplicates); // Ожидаем получить true


// Реализуйте свою собственную структуру данных, похожую на Set, с методами add, delete и has.

function OwnSet (arg){
  // создаем новый массив и проверяем, содержит ли он элемент из переьираемого массива,
  //  если нет, то добавляем иначе пропускаем
 let generalArr = [];
  arg.forEach((item)=>{
    if(!generalArr.includes(item)){
      generalArr.push(item)
      return generalArr
    }
  })
  this.arr = generalArr;

  this.add =function(value){
    if(!generalArr.includes(value)){
      generalArr.push(value)
      return true
    }
    return false
  }
 this.delete =function(value){
  const index= generalArr.indexOf(value)
  if(index!== -1){
    generalArr.splice(index, 1);
    return true; 
  }
  return false; 
  }
  this.has =function(value){
  
   return generalArr.includes(value)
}
}
let arrs= new OwnSet([1,2,3,4,5,6,1,2,50,5,99])
arrs.add('555')
arrs.delete('555')
arrs.has(1)


