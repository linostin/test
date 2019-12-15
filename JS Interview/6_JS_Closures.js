//замыкания
//когда функция имеет доступ до переменных из вышестоящего scope

function sayHelloTo(name) {
    const message = "Hello" + name

    return function() {
        console.log(message)
    }
}

const helloToVik = sayHelloTo("Vik")
console.log(helloToVik)
console.log(helloToVik())
helloToVik()
