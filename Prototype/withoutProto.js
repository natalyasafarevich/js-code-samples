// ===================== Методы прототипов, объекты без св-в _proto_ =====================
//Methods (instead of _proto_):
//? Object.create(proto, [descriptors]) - создает пустой объект со св-ом [[Prototype]], указанный как proto, descriptors - необязательный (исп. для добавления новых св-в)
//? Object.getPrototypeOf(obj) - возвращает св-во [[Prototype]] объекта obj
//? Object.setPrototypeOf(obj)  - устанавливает св-во [[prototype]] объекта obj как _proto_

//Create a new obj with animal prototype 

let animal= {
  eats: true
}
let rabbit=Object.create(animal)
rabbit.eats // true
Object.getPrototypeOf(rabbit) === animal // true

// заменяем прототип rabbit,  на {}
Object.setPrototypeOf(rabbit, {})
rabbit.eat // undefined


// добавляем новые св-ва
let lion =Object.create(animal,{jupms:{value: true}})
lion.jupms // true
lion.eats // true


// ====================='Простейший' объект =====================
let obj={}
let key = '__proto__';
obj[key] = "some value";
obj[key] // [[Object: null prototype] {}]
 
//! потому что __proto__ - либо объект, либо null

let newObj = Object.create(null);
newObj[key] = "new value"
newObj[key] // "new value"

