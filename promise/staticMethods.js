// ===================== Методы =====================
//* Promise.all([]) - позволяет запустить множество промисов паралленьно 
//* и должаться пока они выполнятся все и обработать результат после 

let promise=Promise.all([
  new Promise(resolve=>resolve(1)),
  new Promise(resolve=>resolve(2)),
  new Promise(resolve=>resolve(3)),
]).then(result => console.log(result)) //[ 1, 2, 3 ]


let urls=[
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
]

let req =  urls.map((url)=> fetch(url)); // преобразование каждого url в промис

 Promise.all(req)
 .then(responses=>Promise.all(responses.map((res) => res.json()))) // ожидает результата всех responses
  .then((data) => console.log(data))
// [
//   { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
//   {
//     userId: 1,
//     id: 2,
//     title: 'quis ut nam facilis et officia qui',
//     completed: false
//   },
//   { userId: 1, id: 3, title: 'fugiat veniam minus', completed: false }
// ]

//? Если любой из промисов завершиться ошибкой,то Promise.all - вернет ошибку


//* Promise.allSettled([])
//* - ждет завершения всех промисов, и возвращает статус, и значение/ошибку

/*
  {status:"fulfilled", value: obj} - succeed
  {status:rejected, reason:error} - error
*/

Promise.allSettled([
  new Promise((resolve, reject)=>  reject(new  Error)),
  new Promise(resolve => resolve({name:"Kate", age:22}))
]).then(a=>console.log(a))

// [
//   {
//     status: 'rejected',
//     reason: Error
//   },
//   { status: 'fulfilled', value: { name: 'Kate', age: 22 } }
// ]



//* Promise.rase([])
// - ждет выполнения самого 1-ого (быстрого) промиса и возвращает его результат

let res =  Promise.race([
  new Promise(resolve => resolve({name:"Kate", age:22})),
  new Promise((resolve, reject)=>  reject(new  Error)),
  new Promise(resolve => resolve({name:"Kate", age:22}))
])
.then(a=>console.log(a)) //{ name: 'Kate', age: 22 }
// console.log(pr, 'r')


//* Promise.any([])
// - первый успешно выполненый промис и возвратит его
// - если ни один не завершится успешно - error


//* Promise.resolve(value) === new Promise(resolve => resolve(1))
//* Promise.reject(error)=== new Promise((resolve, reject) => reject(error))
