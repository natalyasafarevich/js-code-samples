//* bind() - принудительная привязка контекста () ф-ции к нужному  объекту

let car ={
  name:"BMW",
  drive(speed){
    return `My car is ${this.name}; speed: ${speed}`
  }
};

let carDrive = car.drive(); // My car is BMW

let newCar = car.drive.bind({name:"Tesla"}); //? привязвыем метод drive к другому объекту
newCar(230) //My car is Tesla; speed: 230


let newCarT = car.drive.bind({name:"Audi"}, 180); //? можем сразу вызывать с аргументом
newCarT() // My car is Audi; speed: 180



//* call() - тоже самое, но ф-ция вызывается сразу +  аргументы

let user = {
  name:"Roma",
  info(age, sex){
    return`Hello ${this.name}, you are ${age}, my ${sex}  `
  }
}

let newUser = user.info.call({name:"Yan"},30, 'boy');
newUser // Hello Yan, you are 30, my boy  

//* apply () - тоже самое call, но  [аргументы]

let newUser2 = user.info.apply({name:"Olha"},[30, 'girl']);
newUser2 //Hello Olha, you are 30, my girl 
