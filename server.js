const express = require('express');
const app = express();
let port = process.env.PORT || 8080;

app.use(express.static('public'));

app.listen(port, '127.0.0.1', () => {
  console.log(`Hello World is listening on port ${port}`);
})
