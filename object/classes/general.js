// ===================== Синтаксис =====================

class User {
  constructor(name, age){
    this.name =name,
    this.age = age
  }
  sayHello(){
    return `Hi ${this.name}`
  } 


}

//? Create

let new_class = new User("Ivan", 32); //User { name: 'Ivan', age: 32 }
new_class.sayHello(); //Hi Ivan

//* Class expression
let Person =class{
  sayHi(){
    return "Hi"
  }
}

let  person = new Person();
person.sayHi() // hi

// or

let Test =  class U {
  sayHi(){
    return 'Hi class U'
  }
}
let res = new Test() //U {}
res.sayHi() //Hi class U
// console.log(U) -  ошибка, т.к. нельзя получить за пределами


//* Создание классоа по запросу

function makeClass(phrase){
  return  class{
    saySmth(){
      return `You say: ${phrase}`
    }
  }
}
let Ph = makeClass("Week");
let result = new Ph().saySmth(); //You say: Week


//* Геттеры/сеттеры
class ExpamleS{
  constructor(age){
    this._age = age
  }
  get age(){
    return this._age
  }
  set age(val) {
    if (val < 18) {
      this._age = "so small"; 
    } else {
      this._age = "right";
    }
  }
}
let person1 = new ExpamleS(20);

// Устанавливаем возраст с помощью сеттера
person1.age = 15;
person1.age


// ==================================================================================== 

class NewClock{

  constructor({template}){
    this.template = template;
    this.timer = null;
 
  }

  render(){
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);
      console.log(output);
  }
  stop(){clearInterval(this.timer);}
  start(){
    this.render();
    this.timer = setInterval(()=>this.render(), 1000);
  }
}


let clock = new Clock({template: 'h:m:s'});
clock.start();