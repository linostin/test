

// let xhr = new XMLHttpRequest(); // инициализируем переменную новым объектом XMLHttpRequest
// xhr.open("GET", "https://learn.javascript.ru/index.html"); // определяем параметры для запроса на определенный адрес
// xhr.send(); // отправляем запрос на сервер

// xhr.onreadystatechange = function() { // устанавливаем обработчик события
//   if(xhr.readyState === 2) { // проверяем состояние запроса
//     const contentType = xhr.getResponseHeader("Content-Type"); // возвращаем строку, содержащую текст указанного заголовка
//     console.log(contentType); // выводим значение переменной в консоль
//   }
// }


let request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.readyState);
    console.log(this.status);
    // console.log(this.responseText)
    console.log("SiteWorks");
  } else {
    console.log("Site not Works");
  }
};

request.open("GET", "https://developer.mozilla.org/", true);
request.send();

fetch("https://developer.mozilla.org/").then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
  }).catch(function() {
    console.log("Not works");
  });

// http://ip-api.com/json
// fetch('https://vc.ru/', {mode: "no-cors"})
//    .then( response => response.json() )
//    .then( data => console.log(data) )


//  let url = "https://jsonplaceholder.typicode.com/";  
async function fetchAsync (url) {
    let response = await fetch(url);
    console.log(response)
    let data = await response.json();
    console.log(data)
  }
  fetchAsync("https://vc.ru/")