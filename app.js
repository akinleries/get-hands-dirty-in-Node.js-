 
const express = require('express');
const bodyParser = require('body-parser');

 const app = express();

 const adminRoutes = require('./routes/admin');
 
 const shopRoutes = require('./routes/shop');


 app.use(bodyParser.urlencoded({ extended: false }));
  
 app.use(adminRoutes); 
 app.use(shopRoutes); 


app.use('/', (request, response, next) => {
  console.log("middlleware");
  response.send('<h1>home node.js  world</h1>');
});

  app.listen(3000);