

// let xhr = new XMLHttpRequest(); // инициализируем переменную новым объектом XMLHttpRequest
// xhr.open("GET", "https://learn.javascript.ru/index.html"); // определяем параметры для запроса на определенный адрес
// xhr.send(); // отправляем запрос на сервер

// xhr.onreadystatechange = function() { // устанавливаем обработчик события
//   if(xhr.readyState === 2) { // проверяем состояние запроса
//     const contentType = xhr.getResponseHeader("Content-Type"); // возвращаем строку, содержащую текст указанного заголовка
//     console.log(contentType); // выводим значение переменной в консоль
//   }
// }


// let request = new XMLHttpRequest();

// request.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     console.log(this.readyState);
//     console.log(this.status);
//     // console.log(this.responseText)
//     console.log("SiteWorks");
//   } else {
//     console.log("Site not Works");
//   }
// };

// request.open("GET", "https://developer.mozilla.org/", true);
// request.send();

// fetch("https://developer.mozilla.org/").then(function(response) {
//     return response.json();
//   }).then(function(data) {
//     console.log(data);
//   }).catch(function() {
//     console.log("Not works");
//   });

// http://ip-api.com/json
// fetch('https://vc.ru/', {mode: "no-cors"})
//    .then( response => response.json() )
//    .then( data => console.log(data) )


//  let url = "https://jsonplaceholder.typicode.com/";  
// async function fetchAsync (url) {
//     let response = await fetch(url);
//     console.log(response)
//     response.headers.get('content-type');

//     let data = await response.json();
//     console.log(data)
//   }
//   fetchAsync("https://vc.ru/")


//   async function fetchAsync (url) {
//       let response = await fetch(url);
//       alert(response.headers.get('Content-Type'));
//     //   response.headers.get('content-type');
  
//     //   let data = await response.json();
//     //   console.log(data)
//     }
//     fetchAsync("https://vc.ru/")

//     let response = await fetch(url, options); // завершается с заголовками ответа
//     let result = await response.json(); // читать тело ответа в формате JSON

// fetch('https://vc.ru/', {mode: 'no-cors'})  
//   .then(function(response) {  
//     return response.text();  
//   })  
//   .then(function(text) {  
//     console.log('Request successful', text);  
//   })  
//   .catch(function(error) {  
//     console.log('Request failed', error)  
//   });

// fetch('https://vc.ru/', {
//   mode: 'no-cors'
// }).then(function(response) {
//   console.log(response.type); // "opaque"
// });

var address = "http://www.google.com";

var t1 = Date.now();
var t2;

var max = 100000;
var failed = false;

var httpReq = (window.XMLHttpRequest)?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
if(httpReq == null) {
    console.log("Error: XMLHttpRequest failed to initiate.");
}
httpReq.onreadystatechange = function() {

    var failTimer = setTimeout(function() {
                               failed = true;
                               httpReq.abort();
                               }, max);

    if (httpReq.readyState == 4) {  //Completed loading
        if (!failed && (httpReq.status == 200 || httpReq.status == 0)) {

            clearTimeout(failTimer);

            t2 = Date.now();

            var timeTotal = (t2 - t1);
            if(timeTotal > max) {
                onFail();
            } else {
                onSuccess(timeTotal);
            }

        }
        else {  //Otherwise, there was a problem while loading
            console.log("Error " + httpReq.status + " has occurred.");
            onFail();
        }
    }
}
try {
    httpReq.open("GET", address, true);
    httpReq.send(null);

} catch(e) {
    console.log("Error retrieving data httpReq. Some browsers only accept cross-domain request with HTTP.");
    onFail();
}


function onSuccess(timeTotal) {

    alert("Time needed to connect: " + timeTotal);
}
function onFail() {
    alert("Well this isn't good");
}