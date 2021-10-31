 
const express = require('express');
const bodyParser = require('body-parser');

 const app = express();

 app.use(bodyParser.urlencoded({ extended: false }));
  

 app.use( '/add-product', (request, response, next) => {
 
   response.send('<form action = "/product" method = "POST"><input type ="text" name = "title"/><button type = "submit">add product</button></form>');
});

app.use( '/product', (request, response, next) => {
    console.log(request.body);
    response.redirect("/");
});


app.use('/', (request, response, next) => {
  console.log("middlleware");
  response.send('<h1>home node.js  world</h1>');
});

  app.listen(3000);