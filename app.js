const http = require('http');
const fs = require('fs');

const server = http.createServer((req , res) => {
   
   const url = req.url;
   const method = req.method;


   if(url === '/'){

    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write('<body><form action = "/message" method = "POST"><input type = "text" name = "message">\<button type = "submit" name = "message">Send</button></form></body>');
    res.write('</html>');
    return res.end();

   }

   if (url === "/message" && method === "POST"){
        const body = [];
        req.on('data', (chunks) => {
          body.push(chunks);
        });


        req.on('end', () => {
          const parseBody = Buffer.concat(body).toString();
          const message = parseBody.split('=')[1];
          fs.writeFileSync('message.txt', message); 
          res.statusCode = 302;
          res.setHeader('Location', '/');
          res.end();
        });

       
   }
    res.setHeader('Content-Type','text/html');
    res.write('<html>'); 
    res.write('<head><title>site Head</title></head>');
    res.write('<body><h1>visit my page</h1></body>');
    res.write('</html>');
    res.end();

});

server.listen(3002);