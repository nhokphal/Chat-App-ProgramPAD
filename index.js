const express = require("express")
const app = express()
const http = require("http")
// add routing 


// adding route 

// route handle homePage
app.get("/", function(request, response)
{
    response.end("Welcome to our Pages");
})


// route hand about 
app.get("/about", function(request, response)
{
    response.end("About us");
})


// route handle contact
app.get("/contact", function(request, response)
{
    response.end("Contact us us");
})

app.use(function(request, response)
{
    response.statusCode = 404; // if miss all above
    response.end("404!");
})


PORT = 3000;

http.createServer(app).listen(PORT);



