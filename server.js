const http = require("http");
const fs = require("fs");
const url=require("url");
const { parse } = require("path");


//const server=http.createServer();//EventEmitter
// server.on("connection",(socket)=>{
//     console.log("Client request ...")
// })

const server = http.createServer(serverCode);
function serverCode(request, response) {



   const parseUrl= url.parse(request.url,true);
console.log(parseUrl);

    let file = true;
    //console.log(request.url);

    let filename = request.url.substring(1);
    if (parseUrl.pathname == "/")
        filename = "index.html"
    else if (parseUrl.pathname == "/about")
        filename = "about.html";

    else if (parseUrl.pathname=="/getData" && request.method=="GET")
    {
        console.log(parseUrl.query);
        response.end();

    }

    else if (parseUrl.pathname=="/getData" && request.method=="POST")
    {
        // console.log(parseUrl.query);
        // response.end();

        let data=""
        request.on ("data",(chunk)=>{
            data+=chunk;
        })
        request.on("end",()=>{
            console.log(data);
            response.end();
            const params=new  URLSearchParams(data);
                console.log(params.get("username"));


        })

    }


    fs.readFile("./" + filename, "utf-8", (err, data) => {
        if (err)
            response.end();
        else {
            response.write(data);
            response.end();

        }
    })



}
function serverFunction(request, response) {
    response.setHeader("content-type", "text/html");

    console.log("client request...");
    console.log(request.url);
    if (request.url == "/") {
        fs.readFile("./index.html", "utf-8", (err, data) => {
            response.write(data);
            response.end();


        })


        //response.write("<b>Welcome</b> to server... ");
        //response.end();
    }
    else if (request.url == "/about.html") {
        fs.readFile("./about.html", "utf-8", (err, data) => {
            response.write(data);
            response.end();


        })
        // response.write("<b>Welcome</b> to about us page");
        // response.end();

    }
    else if (request.url == "/style.css") {
        fs.readFile("./style.css", "utf-8", (err, data) => {
            response.write(data);
            response.end();


        })

    }
    else if (request.url == "/scriptcode.js") {
        fs.readFile("./scriptcode.js", "utf-8", (err, data) => {
            response.write(data);
            response.end();


        })

    }
    else {
        response.end();

    }


}


server.listen(5000, (err) => {
    if (err)
        console.log("error in starting...")
    else

        console.log("Server Started...")
});
