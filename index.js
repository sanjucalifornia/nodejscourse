const express=require('express');
const http=require('http');
const morgan=require('morgan');
const hostname="localhost";
const portno=3000;



const app=express();
app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));
app.use((req,res,next)=>
{
    console.log(req.headers);
    
    res.setHeader('content-type','text/html');
    res.end('<html><body><h1>This is an Express Server written by sanju</h1></body></html>');
});
const server=http.createServer(app);
server.listen(portno,hostname,()=>{
    console.log(`server running at htttp://${hostname} portno${portno}`);
})