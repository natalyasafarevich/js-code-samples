// ===================== Обработка ошибок, try..catch =====================
//* try..catch - позволяет "ловить" ошибки и обрабатывать их

try{ 
  // kod
}catch(e){
  // обработка обшибок
}

//* Объект ошибки
 try {

 }catch(e){
  e.name
  return e.message // объект ошибки

 }


 //* генерация собственных ошибок

 let json = '{"age":"30"}'; // Используйте двойные кавычки для строк JSON
 try {
   let user = JSON.parse(json);
   user.name //undefined,но  catch не сработает,  хотя надо как-то это обработать
   if(!user.name){
    throw new SyntaxError('name dosen`t exist')
   }

 } catch (e) {
   console.log(e.message); // никогда не сработает
 }


 //*finally - сработает всегда

 let json2 = '{"age":"30"}'; // Используйте двойные кавычки для строк JSON
 try {
   let user = JSON.parse(json);
   user.name //undefined,но  catch не сработает,  хотя надо как-то это обработать
   if(!user.name){
    throw new SyntaxError('name dosen`t exist') //!сработает 
   }

 } catch (e) {
   console.log(e.message); // никогда не сработает
 } finally{
  console.log("It's always will be here")//!сработает
 }