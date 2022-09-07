const express = require("express")
const app = express()
const http = require("http")



// meddleware
app.use(function(request, response, next) 
{
    console.log("request type", request.method, request.url)
 
    // pass to next
    next();
}
)

app.use(function(request, response)
{
    response.writeHead(200, { "Content-Type": "text/plain"})
    response.end("hello, welcomes")
})


PORT = 3000;

http.createServer(app).listen(PORT);



