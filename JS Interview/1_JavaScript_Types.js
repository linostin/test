//типы переменных
// 1) null
// 2) undefined
// 3) boolean
// 4) string
// 5) object
// 6) symbol

console.log(typeof 0);
console.log(typeof true);
console.log(typeof "JavaScript");
// "" - двойные, '' - одинарные,
//`` - литералы (в них передают динамические данные)
console.log(typeof undefined);
console.log(typeof {});
//console.log(typeof Symbol(description:"JS"))
console.log(typeof null);
console.log(typeof function() {});
console.log(typeof NaN) //NaN - not a number

let language = "JavaScript"
if (language) {
    console.log("The best language is: ", language)
}



