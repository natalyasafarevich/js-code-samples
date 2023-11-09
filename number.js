// Способы записи
const number = 10000000;
const billion = 1_000_000_000;
const cut_billion= 1e9;

// 7.30000 - после . 5 чисел
const num_1 = 7.3e5;

// 1 миллисекундa = 0.000001
const ms = 1e-6;

// ===================== Кодировка чисел =====================
/*
//* num.toString(base);
//* base - варьируется от 2 до 36, этот метод позволяет перевести число с 
//* одной системы счисления в другую
*/
const num_base = 255;
num_base.toString(2);
// num_base.toString(10)  = 255, т.к. это и есть 10-тичная система счисления

548126..toString(16);
(548126).toString(16);

255..toString(2) === num_base.toString(2);


// ===================== Округления =====================

//* Math.floor() - в меньшую сторону
let num_floor =3.458;
Math.floor(num_floor); // 3

//* Math.ceil() - в большую сторону
let num_ceil=3.458;
Math.ceil(num_ceil); // 4

//* Math.round() - до ближайшего целого
let num_round=3.458;
Math.round(num_round) // 3
Math.round(4.5) // 5

//* Math.trunc() -удаление всех дробных частей
Math.trunc(5.516) // 5 

// * toFixed() - округление до n-ого конца чисел
let num_fix  =  7.4815258
num_fix.toFixed(2); // 7.48

num_fix.toFixed(1); // 7.5 - округлит как math.round

// !========! 
num_fix  =  7;
num_fix.toFixed(5); // 7.00000
num_fix.toFixed(1); // 7.0
// !========! 


// ===================== Не точные вычисления =====================
//! только с 0,1 и 0,2
let a = 0.1;
let b = 0.2;
const sum= a+b;
sum === 0.3  // false, т.к 0,1+0,2 = 0.30000000000000004
//решение
sum.toFixed(1)

// ===================== Проверка isNaN && isFinite =====================

//* isNaN(value) - преобразует и проверяет является ли аргумент NaN

isNaN('551'); // false, т.к. он преобразует в число, а число не может быть NaN
isNaN('srt'); //true
isNaN(NaN); //true
//! NaN === NaN  - false;


//* isFinite(value) - преобразует агрумент в число и возвращает true, если это число

isFinite('515') // true
isFinite('str') // false
isFinite(Infinity) // false

// ===================== Number.isNaN && Number.isFinite =====================

//* Number.isNaN(value) - возвращает true только в том случае, если аргумент принадлежит к типу number
//* и является NaN. Во всех остальных случаях возвращает false.
Number.isNaN('15') // false
Number.isNaN(NaN) // true
Number.isNaN("str" / 2) // true
Number.isNaN(15) // true

//* Number.isFinite(value) возвращает true только в том случае, если аргумент принадлежит к типу number
//* и не является NaN/Infinity/-Infinity. Во всех остальных случаях возвращает false.

Number.isFinite(123); // true
Number.isFinite(2 / 0) // false


// ===================== Object.is =====================
//* Object.is - метод стравнения, как строгое сравнение (===)

Object.is(NaN, NaN)  // true
Object.is(0, -0) // false
// 0 === -0 - true


// ===================== parseInt и parseFloat =====================
// используется для преобразования строк в числа

//* parseInt() - только для целых чисел
 parseInt('100px') // 100
 parseInt('12.5em') // 12
 parseInt('a0e4m') // NaN
// Второй аргумент parseInt(str, radix) - radix- система числения
parseInt('0xff', 16)  // 255
console.log(parseInt('0xff', 16))


 //* parseFloat() - возвращает число с плавающей точкой:
 parseFloat('12.3.4') // 12.3



let n = 6.35
// let t= Math.toFixed(n)
console.log( n.toFixed(2))