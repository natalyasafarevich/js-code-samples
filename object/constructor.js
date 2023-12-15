// ===================== Конструктор, оператор new =====================

//* Ф-ция конструктор - используется для созания новых {}
/* Правила:
    1. Имя ф-ции-конструкторв должна начинаться с большой буквы
    2. Ф-ция-конструктор должна выполняться только с помощью оператора new
*/

function User(name, age, isAdmin){
  this.name= name,
  this.age = age,
  this.isAdmin = isAdmin
};

let user = new User('Kate',22, false);
user.age //22


// ===================== Проверка на вызов в режиме конструктора: new.targert=====================
//* new.target - проверяет был ли вызван конструктор с помощью опуратора new

function NewUser (name){
  if(!new.target){ // если без опкратора, тогда он сам подставит его
    return new NewUser(name)
  }

  this.name = name
}

let  new_user = NewUser('John')

// ===================== Return =====================
//* если ф-ция не содержит return {}, тогда она его вернет, иначе this

function BigUser(){
  this.name  = "Nate";
  return {name:"Kate"}
}

new BigUser().name // Kate

function SmallUser(){
  this.name  = "Nate";
  this.age = 22;
  return this.age // проигнорирует
}

// ===================== Создание методов =====================

function UserHi (name){
  this.name = name;
  this.sayHi = function(){
   return `Hi ${this.name}`
  }
}
let df = new UserHi('Masha');
df.sayHi() //Hi Masha
console.log(df)