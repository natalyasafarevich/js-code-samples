// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

//     read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
//     sum() возвращает сумму этих свойств.
//     mul() возвращает произведение этих свойств.


function Calculator (){
  let a = +prompt("Write the first number",)
  let  b = +prompt("Write the second number",)
  this.read = function(){
    return {a, b}
  }
  this.sum = function(){
    return a+b
  }
  this.mul = function (){
    return a*b
  }
}

// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

//     Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
//     Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.

// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:

function Accumulator(startingValue){
this.value =startingValue;
this.read =function (){
  let a = +prompt('your number');
  return this.value +=a
}

}