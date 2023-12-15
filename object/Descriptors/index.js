// ===================== Флаги и дескрипторы св-в =====================
/*
//* Флаги св-в
1. value -
2. writable - если true, значение можно изменить, иначе только чтение
3. enumerable - если true, св-ва перечисляются в циклах
4. configurable если true, св-ва можно удалять
*/

//? Object.OwpPropertyDescriptor - получение всех св-в об объекте
let user ={
  name: "Kate"
}
Object.getOwnPropertyDescriptors(user, 'name')
/*{
  name: {
    value: 'Kate',
    writable: true,
    enumerable: true,
    configurable: true
  }
} */

// ===================== Изменение флагов =====================
//?Object.defineProperty(obj,propName,descriptors)
// если св-во существует, то обновит флаги,  иначе создаст новое значение, но все флаги -false

let obj={};

Object.defineProperty(obj, 'name',{
  value:"John",
  enumerable: true // для видимости
})
obj // { name: 'John' }

// клонирование объктов с флагами
let clone = Object.defineProperties({},Object.getOwnPropertyDescriptors(obj))
Object.getOwnPropertyDescriptors(clone)
/*{
  name: {
    value: 'John',
    writable: false,
    enumerable: true,
    configurable: false
  }
} */

clone //{ name: 'John' } 



let deepObj= {
  arr:[1,2,3,4,5,6],
  set: new Set([1,5]),
  date: '12.10.'
}

Object.defineProperty(deepObj, 'set', {
  configurable: false,
  writable:false
});


Object.getOwnPropertyDescriptors(deepObj) 
/* 
{
  arr: {
    value: [ 1, 2, 3, 4, 5, 6 ],
    writable: true,
    enumerable: true,
    configurable: true
  },
  set: {
    value: Set(2) { 1, 5 },
    writable: false,
    enumerable: true,
    configurable: false
  },
  date: {
    value: '12.10.',
    writable: true,
    enumerable: true,
    configurable: true
  }
}*/
//! structuredClone - не копирует флаги 
let result = structuredClone(deepObj)
Object.getOwnPropertyDescriptors(result)
/*{
  arr: {
    value: [ 1, 2, 3, 4, 5, 6 ],
    writable: true,
    enumerable: true,
    configurable: true
  },
  set: {
    value: Set(2) { 1, 5 },
    writable: true,
    enumerable: true,
    configurable: true
  },
  date: {
    value: '12.10.',
    writable: true,
    enumerable: true,
    configurable: true
  }
} */
