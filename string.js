let basic_str = "Hello world!";

// ===================== Доступ к символам =====================

basic_str[0] // "H"
basic_str[basic_str.length -1] // "!"

basic_str.at(0) // "H"
basic_str.at(-1)   // "!"

basic_str.at(0) === basic_str[0]  // true
basic_str.at(-1) === basic_str[basic_str.length -1] // true

// ===================== Перебор =====================
for (let char of basic_str){
// return char //'H''e''l''l''o'  'w''o''r''l''d''!'
}

// ===================== includes, startsWith, endsWith =====================

//* includes(substr,pos)- true, если в строке есть substr || false

basic_str.includes('world') // true
basic_str.includes('world war') // false
basic_str.includes('world', 10) //false,  т.к. начал проверку с 10 позиции

//* startsWith(substr)- true, если строка начинается substr || false
//* endsWith(substr)- true, если строка заканчивается substr || false

// ===================== Получение под строки =====================

//* slice(start,end)- возвращает часть строки от start, до end

let new_string=basic_str.slice(0,11) //Hello world
basic_str.slice(-10,-1) // llo world 

basic_str.slice(1) // ello world!

//* substring(start,end)- возвращает часть строки между start - end, не включая их

basic_str.substring(1,5) // ello
basic_str.substring(5,1)// ello

//* substr(start,length)- возвращает часть строки от start длиною length

basic_str.substr(0,4) // Hell

// ===================== Сравнение строк =====================
 /* // * str.localCompare(str2)
- Отрицательное число, если str меньше str2.
- Положительное число, если str больше str2.
- 0, если строки равны
*/

'Hello'.localeCompare('hello'); // 1
'hello'.localeCompare('world'); // -1
'world'.localeCompare('world'); // -1

// ===================== TASKS =====================
let str ='fdf0'
let news = str[0].toUpperCase() + str.slice(1);


function  checkSpam (value) {
const array =['viagra','XXX'];

  value =value.toLowerCase();
  let newVal =value.split(' ') 
  for (let char of newVal){
    if(array.includes(char)){
      return true
    }
    return false
  }
}
checkSpam(  'buy ViAgRA now')


function truncate (str, length){
  return  str.length > length ? str.slice(0,length -1 ) +'..' : str

}

truncate('Вот, что мне хотелось бы сказать на эту тему:',20)
truncate('Вот, что мне хотелос',20)



function extractCurrencyValue(value) {
 return +value.substr(1,value.length -1)
}

extractCurrencyValue('$120')