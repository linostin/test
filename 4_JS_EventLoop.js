console.log("привет!");
console.log("start 2");

function timeout2sec() {
    console.log("timeout2sec")
}

window.setTimeout(function() {
  console.log("inside timeout 2000 sec");
}, 2000);


setTimeout(function() {
    console.log("inside timeout 2000 sec");
  }, 2000);


  setTimeout(timeout2sec, 5000)

console.log("end");
