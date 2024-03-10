require('dotenv').config()
//const {console}=require('console');
const port=process.env.PORT;
const BaseUrl=process.env.BASE_URL;
console.log(port);

const http=require("http");
const server=http.createServer((req,res)=>{
    //console.log(req);
    res.statusCode=200;
    res.setHeader("Content-Type", "text/html");
    console.log(req.url);
    if(req.url=='/')
    {
        res.statusCode=200;
        res.end("<h1>This is Code with Disha</h1><p>hello</p>");
    }
    else if(req.url=='/about')
    {
        res.statusCode=200;
        res.end("<h1>About disha</h1><p>hello</p>");
    }
    else{
        res.statusCode=404;
        res.end("<h1>not found</h1><p>hello</p>");

    }
});
server.listen(port, ()=>{
    console.log(`server is listening on port {port}`);
});