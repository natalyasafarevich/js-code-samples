// ===================== Объекты =====================
//* используются для хранения коллекций разных значений
//* ссылочный тип данных


// ===================== Создание =====================

let user ={} // literal
let new_user = new Object(); // constructor

const obj ={
  name: "Nate",
  age:12
};

delete obj.age;
obj // { name: 'Nate' }

obj['new value'] = true;
obj // { name: 'Nate', 'new value': true }

let key = 'isAdmin';
obj[key] = false;
obj //{ name: 'Nate', 'new value': true, isAdmin: false }


// ===================== Свойство из переменной =====================
function makeUser (name,age){
  return{
    name,age
  }
}

let createUser = makeUser('John', 22);
createUser //{ name: 'John', age: 22 }

createUser.isBlocked =true ;
createUser //{ name: 'John', age: 22, isBlocked: true }

// ===================== Проверка существования св-в =====================
//* "key" in object

let operator = {
  name:"Bill",
  age: 28,
  isMarried:false
}

'age' in operator // true
'isAdmin' in operator // false


// ===================== for..in =====================
//* перебор всех св-в объекта

let defaultObj = {
  name: "Tom",
  age:15
}

for(let key in defaultObj){
  key // name, age (ключи)
  defaultObj[key] //Tom ,15 (св-ва)
}


// ===================== Упорядочение св-в объекта =====================

let codes ={
  '1':"USA",
  '49':"Germany",
  "48":"Poland",
  "375":"Belarus"
}

for(let code in codes){
  code // 1,48,49,375
}
// чтобы исправить:

let new_codes ={
  '+1':"USA",
  '+49':"Germany",
  "+48":"Poland",
  "+375":"Belarus"
}
for(let code in new_codes){
  +code //

}
// console.log('age' in operator)

// ===================== Копирование объектов =====================

let a = {};
let b =a;
a == b // true, т.к. хранит одну и ту же ссылку

let n={
  name :"Hate"
}
let t= n;
t.name ="Kate";
n //{ name: 'Kate' }

//* object.assign(dest, src1 ... srcN)

let dU = {
  isBool:true
};
let mD= {
  name:"Rex"
}

let clone = Object.assign({},dU,mD);
clone //{ isBool: true, name: 'Rex' }

// ===================== Вложенное копирование =====================


let objectM ={
  user:{
    name:"user",
    password:"1111"
  },
  age:15
}

let newClone = Object.assign({},objectM);
newClone //{ user: { name: 'user', password: '1111' }, age: 15 } 

//! but

newClone.user ==objectM.user // true

//* чтобы это исправить

newClone = structuredClone(objectM);
newClone.user ==objectM.user// false
console.log(newClone)