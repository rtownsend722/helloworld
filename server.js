const app = require('express')();
let port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Hello World is listening on port ${port}`);
})
