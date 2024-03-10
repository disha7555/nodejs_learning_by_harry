const {console}=require('console');
const http=require("http");
const port=process.env.PORT || 3001;
const server=http.createServer((req,res)=>{
    console.log(req);
    console.log(req.url);
    res.statusCode=200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>This is Code with Disha</h1><p>hello</p>");

});
server.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
});