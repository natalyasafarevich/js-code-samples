function  number(array){

  if(array.length == 0){
    return []
  }else{
    return array.map((item, i)=>
     item = `${i+1}: ${item}`
    )
  }
  
}number(["a", "b", "c"])



class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
    this.count = 0
  }
  
  isWorthIt(){
this.count = this.draft- (this.crew * 1.5)
return this.count > 20 ?  true :false


  }
  
  //YOUR CODE HERE...
  
}



class Journey{
  constructor(object, crew, balloons){
    this.object =object
    this.crew = crew*80
    this.balloonCapacity = 4.8;

this.balloons =balloons * (this.balloonCapacity + 4.8)
this.rs =0
  }
  isPossible() {
    this.rs = (this.object['weight'] + this.crew) / this.balloons;
    if(Math.round(this.rs) >= 1){
      console.log(Math.round(this.rs))
      return true
    }
    console.log(this.rs)
    return false
  }
}
  // let the journey begin
var letterToEllie = {'weight': 0.004536};
var house = {'weight': 45000};
var pushCart = {'weight': 95};
var lawnChair = {'weight': 5};
var flyingCart = new Journey(pushCart, 0, 50);
var loveOfMyLife = new Journey(letterToEllie, 0, 1);
var gravityFalls = new Journey(house, 2, 95000);
gravityFalls.isPossible()
// console.log(gravityFalls.isPossible())
// const titanic = new Ship(15, 10);
// console.log(titanic.isWorthIt())


class Quark{
  constructor(color, flavor ){
    this.color = color
    this.flavor =flavor
    this.baryon_number= 1/3
    this.other = null
  }
  
  interact(value){

    this.other = value.color;
    value.color= this.color
    this.color = this.other
        console.log( this.color )
  }
}

let q1 = new Quark("red", "up")
  let q2 = new Quark("blue", "strange")

  q1.interact(q2)

  


    function depth(obj) {
      let count = 1
  // if(Object.keys(obj).length === 1){
  //   return 1
  if(Array.isArray(obj)){
    return +0
  }
      for(let key in obj){
        if(typeof obj[key] === 'object'  ){
          count ++ 
          return count
        }
        return Object.keys(obj).length 
      }
    
  return +0
    }
  
  
  console.log(depth(['a', 'b', 'c']))


  // Создайте объект User с полями name, age и email. 
  // Добавьте несколько пользователей в массив users. Используйте методы 
  // массива для фильтрации пользователей, старше определенного возраста или с определенным email.


  class User  {
    constructor(name,age, email){
      this.name =name,
      this.email = email,
      this.age = age
    }
  }
   let user1=new User('John',32,'test@gmail.com');
  let user2=new User('Anna',22,'test@gmail.com');
  let user3=new User('Kate',10,'test@gmail.com');

let age= 20

let users = [user1,user2,user3];
users = users.filter((item)=>{
  return item.age >=age
});

// Используя Map, создайте словарь переводов слов. Добавьте несколько слов на разных
//  языках и их переводы, затем реализуйте функцию, которая принимает слово и выводит его перевод.

let dictionary =new Map();
dictionary.set('apple', new Map([  
['spanish', 'manzana'],
['french', 'pomme'],
['german', 'Apfel']
]
))

dictionary.set('house', new Map([  
  ['spanish', 'casa'],
  ['french', 'maison'],
  ['german', 'Haus']
  ]
  ))
  dictionary.set('hello', new Map([  
    ['spanish', 'hola'],
    ['french', 'bonjour'],
    ['german', 'hallo']
    ]
    ))

    function getTranslate( text,language){
      if(dictionary.get(text).get(language)){
        return dictionary.get(text).get(language)
      }
      return `Unfortunately, the word ${text} doesn't exist`
    }
    getTranslate('apple', 'french')
    
    // Напишите функцию, которая принимает массив 
    // чисел и возвращает Set, содержащий только уникальные элементы массива

let numbers = [1,1,3,5,4,8,6]
function  uA (arr) {
 return new Set(arr)
}
uA(numbers)



// Создайте класс Car с полями make, model и методом displayInfo(), который выводит 
// информацию о машине. Наследуйте от класса Car класс ElectricCar, добавьте новое поле 
// batteryLife и переопределите метод displayInfo() для электромобиля.

class Car{
  constructor (make, model){
    this.make=make,
    this.model = model
  }
  displayInfo(){
    return `${this.make} ${this.model}`
  }

}

class ElectricCar extends Car{
  constructor(make,model,batteryLife){
    super(make, model)
    this.batteryLife = batteryLife;
  }

  displayInfo(){
    return `${super.displayInfo() }, ${this.batteryLife}`
  }
}

const myElectricCar = new ElectricCar('Tesla', 'Model S', '500 miles');
myElectricCar.displayInfo()
// console.log(myElectricCar.displayInfo());



// Создайте класс Library для управления книгами. Реализуйте функционал добавления и 
// удаления книг, поиска книги по названию или автору, а также функцию для вывода списка всех книг в библиотеке.

class Library {
  constructor() {

    this.arr = new Map()
  }

  add(author, book) {
    this.author = author;
    this.book = book;
    if (this.arr.has(author)) {
      this.arr.get(author).includes(book) ? `Book ${book} exists` : this.arr.get(author).push(book);
      return this.arr
    }
    this.arr.set(author, [book])
    return this.arr
  }

  delete(book) {
    this.arr.forEach((key, value, arr) => {
      if (key.includes(book)) {
        let arrayFromMap = arr.get(value);
        arrayFromMap = arrayFromMap.findIndex((item) => item === book)
        this.arr.get(value).splice(arrayFromMap, 1)
        return this.arr
      }
    })

  }

  search(text){
    if(this.arr.has(text)){
      return `Author ${text}: ${this.arr.get(text)}`
    }
    this.arr.forEach((key, value, arr)=>{
      if (key.includes(text)){
            return text =`Book ${text} of ${value}`
      }
      else{
        return `Book ${text} dosen't find`;
      }
   
    })
    return text 
  }
}
let  b =new Library();

b.add('F. Scott Fitzgerald','The Great Gatsby')
b.add('F. Scott Fitzgerald','Tender Is the Night')
b.add('F. Scott Fitzgerald','This Side of Paradise')
b.add('J.D. Salinger','The Catcher in the Rye')
b.add('J.D. Salinger','Franny and Zooey')
b.add('J.D. Salinger','Nine Stories');

b.delete('The Great Gatsby');
b.delete('Franny and Zooey');
b.search('This Side of Paradise')


