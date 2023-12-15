// Реализуйте функцию-конструктор Animal, 
// которая принимает имя и создает объект с этим именем. Добавьте метод getName, возвращающий имя животного.

function Animal(name){
  this.name = name;
}
Animal.prototype.getName = function(){
  return  this.name 
}
let rabbit = new Animal("rabbit");
rabbit.getName() // rabbit


// Напишите функцию-конструктор Person с методом sayName, который выводит имя человека. Создайте объект employee от
//  Person, который имеет дополнительное свойство position и метод sayPosition, выводящий должность.

function Person(name){
  this.name = name;
  this.sayName= function(){
    return this.name
  }
}

let employee  = Object.create(new Person('Greek'), {position:{value:"admin"}, sayPosition: {value: function(){return this.position}}});
employee.position //admin
employee.sayPosition() //admin




let animal= {
  makeSound: function() {
    return 'gav';
  }
}

let cat = Object.create(animal)
console.log(cat.makeSound())