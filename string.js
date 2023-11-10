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