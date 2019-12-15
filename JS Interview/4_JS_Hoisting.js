//hoisting когда js при интерпретации, перемещает значение некоторых вещей в начало файла например функций


console.log(sum(1, 41));

function sum(a, b) {
  return a + b;
}


console.log(i)
//можно получить доступ к переменной до инициализации переменной в коде
var i = 50
console.log(i)

//const и let не подвержены hoisting
// console.log(num)
// const num = 50
// console.log(num)
//ReferenceError: can't access lexical declaration `num' before initialization


//function expression
//function declaration


//function declaration
//можем вызывать функцию где угодно и нам все равно где она определена
// console.log(square(25))
// function square(num) {
//     return num ** 2
// }


//function expression
//функции заданные таким образом, мы можем вызвать, только после того как они определены
const square = function square(num) {
    return num ** 2
}
console.log(square(25))