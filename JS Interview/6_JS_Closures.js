// //замыкания
// //когда функция имеет доступ до переменных из вышестоящего scope

// function sayHelloTo(name) {
//     const message = "Hello" + name

//     return function() {
//         console.log(message)
//     }
// }

// const helloToVik = sayHelloTo("Vik")
// console.log(helloToVik)
// console.log(helloToVik())
// helloToVik()

// function createFrameworkManager () {
//     const fw = ["Angular", "React"]

//     return {
//         print: function() {
//             console.log(fw)
//         },
//         add: function(framework) {
//             fw.push(framework)
//         }
//     }
// }

// const manager = createFrameworkManager()
// console.log(manager)
// manager.print()
// manager.add("VueJS")
// manager.print()

//setTimeout

const fib = [1, 2, 3, 5, 8, 13];

//синтаксис es6
// for (let i = 0; i < fib.length; i++) {
//     setTimeout(function() {
//         console.log(`fib[${i}] = ${fib[i]}`)
//     }, 1500)
// }

//через замыкания
for (var i = 0; i < fib.length; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(`fib[${j}] = ${fib[j]}`);
    }, 1500);
  })(i);
}

// Не согласна с объяснением вызова setTimeout в цикле for.
// Мол, цикл фор быстро проходит и поэтому через 2 сек выдаётся везде последнее значение i.
// Тут надо бы пояснить, что если поставить 0 секунд - будет тоже самое.
// Потому что так работает EventLoop - в любом случае функция с консоль лог будет ждать,
// когда цикл фор закончится и освободит стэк. Потому что setTimeout - это особая функция, являющаяся частью web api.
// Поэтому функция внутри сетТаймаут всегда попадает в очередь ожидания и только когда стек выполнения функций освобождается,
// тогда она выталкивается туда и начинает выполнение. Понятно, что ты не хотел заморачивать этим новичков,
// съело бы доп.время. А так всё супер.
