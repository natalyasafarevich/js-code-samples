// ===================== Оператор нулевого слияния (??) =====================
//* ?? - определяет присвоено ли значение в переменную или переменая  == null || undefined

let user;
user ?? 'Anonimus' //Anonimus- т.к. user - null

user = "Name";
user ?? "Age" // Name

const height =0;
height || 100 // 100 
height ?? 100 //0

// ===================== Оператор нулевого присваивания (??=) ===================

let empty_user = null;
if(empty_user===null || empty_user === undefined){
  empty_user = 20;
}
//! or

empty_user ??= 18;
