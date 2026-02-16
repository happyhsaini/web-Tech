roll(12212, 1000)
  .then(() => (console.log("downloading..."), roll(12312, 2000)))
  .then(() => (console.log("downloading..."), roll(12412, 3000)))
  .then(() => (console.log("almost over..."), roll(12512, 4000)))
  .catch(console.log)
  .finally(() => console.log("Done with viva)"));