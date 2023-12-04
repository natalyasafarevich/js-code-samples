// ===================== Тип данных Symbol =====================
//* В качестве ключей {}, используются не только строки но и Symbol

//? Symbol- уникальный индетификатор

let id = Symbol();
id //  Symbol()

let new_id = Symbol('id'); //  символ id с описанием (именем) id
new_id //  Symbol('id')

//? Symbol - всегда уникальны
let unId =  Symbol('id');
let unId2 =  Symbol('id');
unId === unId2 // false

//? Symbol - не преобразуются автоматически
// для преобразования

unId.toString()  //Symbol(id) - string

// ===================== Скрытые св-ва =====================

let user = {
  name: "Alex"
}
let idUser =Symbol('id');
user[idUser] = 5;
user // { name: 'Alex', [Symbol(id)]: 5 }

let newSymbl = Symbol('id');
let newUser = {
  [newSymbl] :'value'
}

newUser //{ [Symbol(id)]: 'value' }

//! Symbols - игнорируются в for in, но не Object.assign

let symb = Symbol('name');
Symbol.for('name') //  читает и вовращает значение, если его несуществует - создаст
Symbol.keyFor(symb) // name
