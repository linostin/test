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
console.log(typeof NaN); //NaN - not a number

//приведение типов

//приведение строкового типа данных к boolean
let language = "JavaScript";
if (language) {
  console.log("The best language is: ", language);
}

//приведение к false
//"", 0, null, undefined, NaN, false

console.log(Boolean("")); //false
console.log(Boolean("Hello"));
console.log(Boolean(" "));
console.log(Boolean("0"));
console.log(Boolean(0)); //false
console.log(Boolean(null)); //false
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(function() {}));

//строки и числа

console.log(1 + "2");
//1 приводится к строковому формату и получается строка 12
console.log("" + 1 + 0);

console.log("" - 1 + 0);
//для строк не определен оператор минус, поэтому приводится в число
console.log("3" * "8");
//для строк не определен оператор умножения, поэтому приводится в число
console.log(4 + 10 + "px");
//важен порядок, первые два значения складываются как число, затем строка
console.log("px" + 5 + 10);
//изначально приведено к строке и в итоге получаем строку
console.log("42" - 40);
//приведение к числу
console.log("42px" - 2);
//получаем NaN, при приведении строки 42px к числу получаем NaN и далее NaN - 2 = NaN
console.log(null + 2);
//null при приведении к числу будет равняться нулю 0
console.log(undefined + 42);
//получаем NaN, потомучто undefined не приводится к числу

// == vs ===
// == сравнение значения с приведением типов
// === сравнение без приведения типов

console.log(2 == "2");
//true
console.log(2 === "2");
//false
console.log(undefined == null);
//true
console.log(undefined === null);
//false

//рекоммендуется использовать тройное равно, чтобы было меньше ощибок

console.log("0" == false);
//интерпритатор переводит все к числу "0" = 0 и false = 0
//true
console.log("0" == 0);

//список некоторых неоднозначных сравнений

console.log(false == "");
//true
console.log(false == []);
//true
console.log(false == {});
//false
console.log("" == 0);
//true
console.log("" == []);
//true
console.log("" == {});
//false
console.log(0 == []);
//true
console.log(0 == {});
//false
console.log(0 == null);
//false
