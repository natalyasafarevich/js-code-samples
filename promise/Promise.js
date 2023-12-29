// ===================== Промисы =====================
//* Promise - это объект, который используется для выполнения асинхронных операций и управления их результатами. 
//* Он представляет собой обещание о том, что определенное действие будет успешно выполнено и вернет результат, 
//* либо завершится с ошибкой и вернет ее

// Синтаксис
// let promise = new Promise('resolve', 'reject')
//? new Promise - исполнитель 
//? resolve(value) - если работа завершиться успешно с результатом value
//? reject(error) -  если произошла ошибка, error - объект

//? Исполнитель запускается автоматически. Он должен выполнить работу, а затем вызвать resolve || reject

//* Cв-ва

// state('состояние') -в начале "pending" (ожидание), потом меняется на fulfield(выполнено  успешно) - при вызове resolve
// при reject - rejected (выполнено  с ошибкой)  

// result - в начале undefined, далее value - при вызове resolve(value), при reject - error


let placeholder= new Promise(function(resolve,reject){
  // resolve(fetch('https://jsonplaceholder.typicode.com/tofsdos/1'))
  resolve(new Error)

})
.then(data=> data.json())
.then(res=>{return res})



// ===================== Потребители:then, catch =====================
// .then(function(result)=>result(обработает, при успешном выполнении), function(error)=> error(обработки ошибки))


// .catch() - обработка ошибок

placeholder.catch(error => console.log( error.message)) //data.json is not a function

// ===================== finally=====================

//finally- выполниться в любом случае (! всегда) - ничего не возвращает
placeholder.finally(()=>console.log('It works')) // It works