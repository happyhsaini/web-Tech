// const p = new Promise((resolve, reject)=>{
//         resolve("Promise resolved");
//         reject("Promise rejected");
// });

// p.then((massage)=>{
//     console.log(massage);
// }).catch((error)=>{
//     console.log(error);
// });      

// console.log("1). code start");
// const p = new Promise((resolve,reject)=>{
//     console.log("2). code in compile");
//     setTimeout(()=>{
//         resolve("3). Problem resolved");
//         console.log("7). code in compile after promise resolved");
//     }, 2000);
// });
// console.log("4). error in code");
// p.then((message)=>{
//     console.log(message);
//     console.log("5). code end");
// });

// console.log("6). error found in code");

// function roll(num, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Roll. no. is " + num);
//       resolve(num); // pass value to next step
//     }, delay);
//   });
// }
// roll(12212, 1000)
//   .then(() => {
//     console.log("wait its getting downloaded");
//     return roll(12312, 2000);
//   })
//   .then(() => {
//     console.log("wait its getting downloaded");
//     return roll(12412, 3000);
//   })
//   .then(() => {
//     console.log("wait its almost over");
//     return roll(12512, 4000);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   })
//   .finally(() => {
//     console.log("Done with viva)");
//   });


// roll(12212, 1000)
//   .then(() => (console.log("downloading..."), roll(12312, 2000)))
//   .then(() => (console.log("downloading..."), roll(12412, 3000)))
//   .then(() => (console.log("almost over..."), roll(12512, 4000)))
//   .catch(console.log)
//   .finally(() => console.log("Done with viva)"));

  function roll(num, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Roll. no. is " + num);
      resolve(num);
    }, delay);
  });
}

async function run() {
  try {
    await roll(12212, 1000);
    console.log("wait its getting downloaded");

    await roll(12312, 2000);
    console.log("wait its getting downloaded");

    await roll(12412, 3000);
    console.log("wait its almost over");

    await roll(12512, 4000);
    console.log("Finished download flow");
  } catch (err) {
    console.log("Error:", err);
  } finally {
    console.log("Done with viva");
  }
}

run();