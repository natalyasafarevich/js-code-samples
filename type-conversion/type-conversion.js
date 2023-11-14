
// ===================== Преобразование типов =====================


// ===================== Строковое =====================
//* сейчас value - boolean 
let value =false;
const new_string = String(value);
typeof new_string // string


// ===================== Числовое =====================

 '6'/'2' // преобразует в числовое значение
 let str ='123';
 Number(str) // typeof number
 Number('str') // NaN
 Number(undefined) // NaN
 Number(null) // 0
 Number(true) // 1
 Number(false) // 0
 Number('') // 0




// ===================== Логическое =====================
let bool = 'string'
Boolean(bool) // true
Boolean('') // false
Boolean(' ') // true
Boolean(0) // false
Boolean('0') // true
Boolean(1) // true

 //! =====================

 '2'+'2' // 22 = string
 '2'+ 2  // 22 = string
 2 * '2' // 4 = number
 '2'-2 // 0 = number
 '2'**2 //4 = number
 '2'/2  //1 = number


 "" + 1 + 0 //10
"" - 1 + 0 // -1
true + false //1
6 / "3" //2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 //$45
"4" - 2 //2
"4px" - 2 //NaN
"  -9  " + 5 //  -9  5
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2  //-2



5 > 4 // true
"ананас" > "яблоко" // false
"2" > "12" //true Используется посимвольное сравнение, поэтому false. "а" меньше, чем "я".
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" //false Строгое сравнение разных типов