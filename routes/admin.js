const express = require('express');

const router = express.Router();

router.get( '/add-product', (request, response, next) => {
 
    response.send('<form action = "/product" method = "POST"><input type ="text" name = "title"/><button type = "submit">add product</button></form>');
 });
 
 router.use( '/product', (request, response, next) => {
     console.log(request.body);
     response.redirect("/");
 });


module.exports = router;