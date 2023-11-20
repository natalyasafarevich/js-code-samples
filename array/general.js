// ===================== Массивы =====================
//* Массив - структура данных, которая хранит упорядоченный набор элементов,  любого типа
//* главная особенность - доступ к элементу по index

// ===================== Объявление =====================

let arr= new Array();
let array = []

//? Элементы массива  начинаются с 0

let fruits =['watermelon','apple','grapes'];
fruits[0] // watermelon

//? замена
 fruits [1] = 'peach'
 fruits // ['watermelon','peach','grapes']

 //? добавление нового элемента

fruits[3] = 'orange';
fruits // ['watermelon','peach','grapes','orange']


 // ===================== Получение последних элементов - at ===================== 
 fruits.at(-1) //orange
 fruits.at(2) //grapes


 // ===================== Методы ===================== 

//? pop - удаляет последний элемент и возвращает его 

let retunedFruit =fruits.pop() 
retunedFruit //orange

fruits // [ 'watermelon', 'peach', 'grapes' ]


//? push - добавляет последний элемент в конец массива

fruits.push('new fruits');
fruits //[ 'watermelon', 'peach', 'grapes', 'new fruits' ]


//? shift - удаляет 1 элемент и возвращает его 
let shift_fruits = fruits.shift()
shift_fruits // watermelon
fruits //  [ 'peach', 'grapes', 'new fruits' ]

//? unshift - добавляет элемент в начало  массива
fruits.unshift("kiwi",'strawberry');
fruits//[ 'kiwi', 'strawberry', 'peach', 'grapes', 'new fruits' ]


