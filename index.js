const axios = require('axios').default;
// run `node index.js` in the terminal

console.log(`Fetch API Node.js v${process.versions.node}!`);
let arr = [];

// Fetch API is a promise:
//axios("https://jsonplaceholder.typicode.com/posts")
//.then(data=>{arr=data; console.log("arr:", arr)});
axios('https://jsonplaceholder.typicode.com/posts').then((err, res) => {
  console.log(err);
});
