

const person = new Object({
    name: "Maxim",
    age: 25,
    greet : function() {
        console.log("greet!")
    }
})

Object.prototype.sayHello = function() {
    console.log("Heloo!")
}

const lena = Object.create(person)
lena.name = "elena"

const str = "string!"
const strq = new String("string!")