const express= require("express");
const path=require("path");
//const server=http.createServer((req,res)=>{

    // });

const app= express();
app.use(express.static("."));
app.use(express.urlencoded({extended:true}));
//simple - variable=value&variable=value
//complex user[name]=value&user[age]=value

app.get("/getData",(req,res)=>{
    //req.query
    res.send(`Welcome ${req.query.username}`);

})

app.post("/getData",(req,res)=>{

    //req.body
    res.send(`Welcome ${req.body.username}`);
})


//if(req.url=="/" && req.method=="GET")

//Middleware

// app.get("/",(req,res)=>{

//     // res.write("Welcome to server");
//     // res.end();
//   // res.send("Welcome the server..")
//   //file path (Absolute Path) w.r.t. root directory
//   //Relative Path w.r.t. current directory "./"

//   //__dirname
//   //Absolute Path ->__dirname
//   // ./index.html ->Relative Path
//  // console.log(__dirname);

//  // res.end();
//   res.sendFile(path.join(__dirname,"./home.html"));
// //res.send("Welcome to server..")

// })


app.listen(5000,(err)=>{
    if(err)
        console.log("error in starting server...",err);
    else
        console.log("Server Started...")
})

