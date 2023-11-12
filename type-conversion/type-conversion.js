
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
