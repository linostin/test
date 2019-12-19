//context он определяет как функция была вызвана

// const person = {
//     surname: "Старк",
//     knows: function (what, name) {
//         console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
//     }
// }

// const john = {
//     surname: "Сноу"
// }

// person.knows("все", "бран")
// //call вызывает контекст
// person.knows.call(john, "ничего не", "Джон")
// //
// person.knows.apply(john, ["ничего не", "Джон"])
// //bind Не вызывает функцию сразу же, а возвращает новую функцию
// const bound = person.knows.bind(john, "ничего не", "Джон")
// bound()

// function person(name, age) {
//     this.name = name
//     this.age = age

//     console.log(this)
// }

// const viktor = new person("Viktor", 20)

//
//явный
// function logThis() {
//     console.log(this)
// }

// const obj = {num: 42}
// logThis.apply(obj)
// logThis.call(obj)
// logThis.bind(obj)()

// //неявный

// const animal = {
//     lesg: 4,
//     logThis: function() {
//         console.log(this)
//     }
// }

// animal.logThis()

function Cat(color) {
  this.color = color;
  console.log("This", this);
  (() => console.log("Arrow this", this))();
}

new Cat("red");
//стрелочная функция не создает свой контекст
