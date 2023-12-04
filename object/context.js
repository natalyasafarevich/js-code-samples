//* this - это контекст объекта
let user= {
  name:"John",
  sayHi(){
    return this.name
    //!! user.name - error

  }
}

let newUser = Object.assign({}, user, { name: "kate" });

newUser.sayHi() //Kate

//* ф-ции тоже имееют контекст 
function contextFC(){
  return this?.age
}
contextFC() // undefined

//* но, можно присвоить как св-во

newUser.sayAge = contextFC;
newUser.sayAge() // 36


user.sayAge = contextFC;
user.sayAge() //  undefined


//!! стрелочный ф-ции не имеют контекста