const http=require("http");
const fs=require("fs");

//const server=http.createServer();//EventEmitter
// server.on("connection",(socket)=>{
//     console.log("Client request ...")
// })

const server=http.createServer(serverCode);
function serverCode(request,response)
{

    let filename=request.url.substring(1);
    if(request.url=="/")
        filename="index.html"
    else if (request.url=="/about")
        filename="about.html";


    fs.readFile("./"+filename,"utf-8",(err,data)=>{
        if(err)
            response.end();
        else{      
        response.write(data);
                response.end();
                
        }
            })
        


}
function serverFunction(request,response)
{
    response.setHeader("content-type","text/html");

    console.log("client request...");
    console.log(request.url);
    if(request.url=="/")
    {
            fs.readFile("./index.html","utf-8",(err,data)=>{
                response.write(data);
                response.end();
                

            })


    //response.write("<b>Welcome</b> to server... ");
    //response.end();
    }
    else if (request.url=="/about.html")
    {
         fs.readFile("./about.html","utf-8",(err,data)=>{
                response.write(data);
                response.end();
                

            })
        // response.write("<b>Welcome</b> to about us page");
        // response.end();

    }
    else if (request.url=="/style.css")
    {
         fs.readFile("./style.css","utf-8",(err,data)=>{
                response.write(data);
                response.end();
                

            })

    }
     else if (request.url=="/scriptcode.js")
    {
         fs.readFile("./scriptcode.js","utf-8",(err,data)=>{
                response.write(data);
                response.end();
                

            })

    }
    else
    {
        response.end();

    }


}


server.listen(5000,(err)=>{
    if(err)
        console.log("error in starting...")
    else

    console.log("Server Started...")
});
