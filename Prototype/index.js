let animal = {
  eats: true
};
let rabbit = {
  jumps: true,
  eats: false

};

rabbit.__proto__ = animal; // (*)

// теперь мы можем найти оба свойства в rabbit:
console.log( rabbit.eats ); // true (**)
console.log( rabbit.jumps ); // true


let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head

};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table

};

let pockets = {
  money: 2000,
  __proto__: bed
};


let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [food];
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log( lazy.stomach ); // apple