//console.log("request data...");

// setTimeout(() => {
//     console.log("Preparin data...")

//     const backendData = {
//         server: "aws",
//         port: 2000,
//         staatus: "working"
//     }

//     setTimeout(() => {
//         backendData.modified = true
//         console.log("Data received", backendData)
//     },2000)

// },2000)

//с помощью Promise ниже

// const p = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     console.log("Preparin data...");
//     const backendData = {
//       server: "aws",
//       port: 2000,
//       staatus: "working"
//     };
//     resolve(backendData);
//   }, 2000);
// });

// p.then((data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true;
//       resolve(data);
//     }, 2000);
//   });

// //   p2.then(clientData => {
// //       console.log("Data received", clientData)
// //   })

// }).then(clientData => {
//     console.log("Data received", clientData)
// })

const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
};

// sleep(2000).then(() => console.log("After 2 seconds"));
// sleep(3000).then(() => console.log("After 3 seconds"));

Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log("All promises");
});

Promise.race([sleep(2000), sleep(5000)]).then(() => {
  console.log("Race promises");
});
