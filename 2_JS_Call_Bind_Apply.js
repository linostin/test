function hello() {
    console.log("привет!", this)
}

const person = {
    name: "Nismo",
    age:25,
    sayHello: hello,
    sayHelloWindow: hello.bind(this),
    logInfo: function() {
        console.log(`Name is ${this.name}`)
    }
}

const lena = {
    name: "Lena",
    age: 23
}

//person.logInfo.bind(lena)()

//person.logInfo.call(lena)

person.logInfo.apply(lena,)