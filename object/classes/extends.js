// ===================== Наследование классов =====================
//* - способ расширения одного класса другим

class Animal {
  constructor(name){
    this.name=name;
    this.speed = 0
  }

  run(speed){
    this.speed =speed;
    return `${this.name} runs with speed ${this.speed}`
  }
  stop(){
    this.speed = 0
    return `${this.name} stoped`
  }
}

//? синтаксис: class Child наследует Parent 

class Rabbit extends Animal{
  hide(){
    return `${this.name} hide`
  }
}


let  rabbit = new Rabbit("Rabbit");

// методы наследуются из Animal
rabbit.run(5)//Rabbit runs with speed 5
rabbit.stop()//Rabbit stoped


rabbit.hide() //Rabbit hide
rabbit.name //Rabbit


//*Переопределение методов
//если указать в наследуемом классе, совственный метод, то он будет испольвать его, вместо наследуемого

class Lion extends Animal{
  stop(){
    // теперь метод из  Animal не будет работать
  }
}
//? но, если надо не заменить а дополнить или изменить метод:

class Wolf extends Animal {
  stop(){
    super.stop() //вызываем тут меттод из наследуемого класса
  //..
  }
}
//! у стрелочных ф-ций нет super

//*  Преопределение конструктора

class Tiger extends Animal{
  constructor(name,earLength){
    super(name) // super необходим, если мы хотим добавить новые св-ва, иначе вызовет ошибку
    this.earLength= earLength
  }

}

let tiger = new Tiger("tiger");


// =========================================================================================================

// Создайте класс Shape, у которого есть метод calculateArea(). 
// От этого класса унаследуйте классы Square и Circle. Добавьте им 
// необходимые свойства и переопределите метод calculateArea() для
//  каждого класса, чтобы он возвращал площадь соответствующей фигуры

class Shape{
  calculateArea(){
    throw new Error('Method calculateArea() must be implemented');
  }
}

class Square  extends Shape{
  constructor(side){
    super()
    this.side = side
  }
  calculateArea(){
  return  this.side *  this.side 
    // S = a × a = a2, где S — площадь, a — сторона.  
  }
}


class Circle  extends Shape{
  constructor(radius){
    super()
    this.pi = Math.PI;
    this.radius = radius
   }
  calculateArea(){
    return this.pi * this.radius * this.radius;
  }
}

const square = new Square(2);
console.log('Площадь квадрата:', square.calculateArea()); // Ожидаемый результат: 4

const circle = new Circle(2);
console.log('Площадь круга:', circle.calculateArea()); // Ожидаемый результат: примерно 12.57


// Создайте базовый класс Animal. У этого класса должны быть методы makeSound() и move().
//  Наследуйте от этого класса подклассы Dog и Bird. 
// Добавьте им уникальные свойства и переопределите методы makeSound() и move() 
// для каждого класса.


class NewAnimal {
  makeSound(){
    return ` sound isn't added`
  }
  move(){
    return `move isn't added`
  } 
}

class Dog extends NewAnimal{
  constructor(name){
    super()
    this.name = name,
    this.sound = null,
    this.speed = 0
  }
  makeSound(sound){
   return this.sound = sound
  } 
  move(speed){
 this.speed =speed
 return `Your speed is ${this.speed}`
  } 
}

// Создайте базовый класс Person, у которого есть свойства name и age, и метод describe(),
//  который выводит информацию о человеке. Затем создайте класс Employee, который наследуется от класса Person.
//   Добавьте дополнительные свойства, такие как position и salary. Переопределите метод describe(), 
//   чтобы он также включал информацию о должности и зарплате сотрудника. 
// Используйте ключевое слово super, чтобы избежать дублирования кода при вызове конструктора из родительского класса.

class Person{
  constructor(name, age){
    this.name= name,
    this.age =age
  }

  describe(){
    return `Hello ${this.name}. You are ${this.age}`
  }
}

class Employee extends Person {
  constructor(name, age,position, salary){
    super(name,age)
    this.position= position,
    this.salary =salary
  }

  describe(){
    return `${ super.describe()} You are ${this.position}, ypur salary is ${this.salary}$`
  }
}

const employee =  new Employee("John", 32 , 'developer', 1000);
console.log(employee.describe())