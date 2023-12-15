// ===================== Прототивное наследование =====================

// * объекты могут наследовать св-ва и методы других объектов через  их прототипы
// * объекты имеют скрытое св-во [[Prototype]] которое равно null или ссылается на другой объект,этот объект и называется прототип

// * если необходимо прочитать св-во из Object, а оно отсутствует, JS берет его  из прототипа - прототивное наследование

let animal={
  eats:true
}
let rabbit={
  jupms: true
} 

//? "aminal" является протопипом для rabbit, а rabbit прототивно наследуется от aminal
rabbit.__proto__ = animal
rabbit //{ jupms: true, _proto_: { eats: true } }
// теперь rabbit доступно св-во eats, с условием что его у негонет, иначе просто проигнорирует


// ===================== Цепочки =====================

let apple = {
  green: true
}
let orange = {
  or: false,
  _proto_:apple
}
let grapes = {
  test: true,
  _proto__: orange
}
console.log(grapes)
grapes //{ test: true, _proto_: { or: false, _proto_: { green: true } } }}


//? Ограничения
// 1. Ссылки ( _proto_) не могут замыкаться в кругу
// 2. Значения _proto_ могут быть obj || null

//! Только 1 [[Prototype]]
//! this -никак невляет на прототипы, как и прототипы на this


// ===================== for..in =====================
//? Object.keys(obj) - возвращает только совственные ключи,  но не наследованные

let user = {
  name:'John',
  age:30
}

let john = {
  isAdmin: false,
  __proto__:user
}

Object.keys(john)  //[ 'isAdmin' ]
//!но for..in работает
for(let key in john){

  let ownProperty =john.hasOwmProperty(key) // - true если у объекта есть совственное св-во, а не унаследованное
 
    key // isAdmin, name,age
}


console.log(Object.keys(john))