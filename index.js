const express=require('express');
const http=require('http');
const hostname="localhost";
const portno=3000;
const app=express();

app.use((req,res,next)=>
{
    console.log(req.headers);
    res.statusCode=200;
    res.setHeader('content-type','text/html');
    res.end('<html><body><h1>This is an Express Server written by sanju</h1></body></html>');
});
const server=http.createServer(app);
server.listen(portno,hostname,()=>{
    console.log(`server running at htttp://${hostname} portno${portno}`);
})