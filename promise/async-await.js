// ===================== Async/await =====================
// -  синтаксис для работы с промисами

//*Асинхронные ф-ции

async function f6(){} // всегда возвращает промис

// await -только внутри async function
// await -заставить js ждать, до тех  пор  пока не выполниться промис, после этого он  вернет результат и продолжит выполнение кода

async function f(){
  let response =  await fetch (`https://api.github.com/repos/octocat/Spoon-Knife/issues`)
  let result = await response.json();
  console.log(result)
}

//Anonimus function

// (async() =>{
// let res = await fetch('https')
// let t = await res.json()
// })()


//* For classes

class Waiter{
  async wait (){
    return `waiiit`
  }
}
new Waiter().wait().then(a=>console.log(a)) //waiiit


//* Обработка ошибок

async function f2(){
  try{
    let response = await fetch('https://api.github.com/repos/octocat/Spoon-Knife/issues');
    return response.json();
 
  }catch(e){
    return  e.message
  }
}
(async() =>{
let res = await f2();
console.log(res ,'g')
})() //  будет вызвана когда f2 будет готова, иначе f2(),без анонимной ф-ции - pending

//Promise.all
(async() =>{
let re = await Promise.all([
  fetch('https://api.github.com/repos/octocat/Spoon-Knife/issues'),
  fetch('https://api.github.com/repos/octocat/Spoon-Knife/issues/558156')
]);
})()


// ======================================================================================
async function loadJson(url) {
  try{
    let response = await fetch(url)
    let result = await response.json();
    return result
  }
  catch(e){
    throw new Error(e.status);
  }
 
}

loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404