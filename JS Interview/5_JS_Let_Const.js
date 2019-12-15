//Let
//позволяет создавать переменные, которые можно в последствии изменить

// let a = "Variable a";
// let b = "Variable b";

// //block scope
// {
//   a = "New Variable A";
//   let b = "Local Variable B";
//   //переменная, которая объявлена let доступна только в рамках текущего scope
//   console.log("Scope A", a);
//   console.log("Scope B", b);
// }

// console.log("A", a);
// console.log("B", b);

//Const
//константу мы не можем изменить
const PORT = 8080;
//PORT = 2000 нельзя изменить

//массив
const array = ["JS", "is", "awesome"];
array.push("!");
array[2] = "super";
console.log(array);
//можно менять значения внутри массива или объекта
//но не изменять сам смассив или объект на что то другое
const obj = {};
