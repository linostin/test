

const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

//delay(2000).then(() => console.log("привет!"))

const url = "https://jsonplaceholder.typicode.com/todos"

function fetchTodos() {
    delay(2000).then(() => {
        fetch(url).then(response => response.json()) 
    })
}