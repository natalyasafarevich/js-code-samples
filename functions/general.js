// ===================== General  =====================

//* получение аргументов для function expression
let arrow_fn = (...arg) =>{
  // console.log(arg) // -для получения аргументов,  если мы их не передаем
}
arrow_fn(1,5,6) // [1,5,6]

//* получения аргументов для function declaration
function declareFunction (){
// console.log(arguments)
}

declareFunction(1,2,3) // вернет объект, где value - arguments
//Arguments{ 0: 1, 1: 2, 2: 3,  }



//* this

const thisFn = ()=>{
  console.log(this)
}
thisFn() // this - вернет window, т.к. у него нет области видимости

function DThisFn (a,b){
  'use strict';
  console.log(this)
}
DThisFn() // undefined