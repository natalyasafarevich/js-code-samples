let obj = {
  id:1,
  login: "angel",
  password: 123456,
  isLogin: false,
}

//* Object.keys(obj) - возвращает массив ключей

let keys = Object.keys(obj); //[ 'id', 'login', 'password', 'isLogin' ]

//* Object.values(obj) - возвращает массив значений

 let values =Object.values(obj); //[ 1, 'angel', 123456, false ]

 //* Object.entries(obj) - возвращает массив пар 

 let entries = Object.entries(obj);
//  [
//   [ 'id', 1 ],
//   [ 'login', 'angel' ],
//   [ 'password', 123456 ],
//   [ 'isLogin', false ]
// ]

 //* Object.fromEntries(array) - преобразует массив в объект

let newObj =  Object.fromEntries(entries);
// { id: 1, login: 'angel', password: 123456, isLogin: false }
 