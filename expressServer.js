const express=require("express");
const app=express();
const fs=require("fs");

const path=require("path");
app.use(express.static("."));
app.use(express.urlencoded({extended:true}));


/* LOGIN ENDPOINTS*/
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"./login.html"));

})
app.get("/dashboard",(req,res)=>{
    res.sendFile(path.join(__dirname,"./Dashboard.html"));

})
app.get("/signup",(req,res)=>{

    res.sendFile(path.join(__dirname,"./Signup.html"));

})

app.post("/login",(req,res)=>{
    //body
    //console.log(req.body.username);
   // res.end();
   fs.readFile("./users.json","utf-8",(err,data)=>{
    let users=[];
    if(err)
        users=[];
    else
    {
        users= JSON.parse(data);
    }
   let results= users.filter((item)=>{
        if(item.username==req.body.username && item.password==req.body.password)
            return true;

    })
    if(results.length>=1)
        res.redirect("/dashboard");

       // res.sendFile(path.join(__dirname,"./Dashboard.html"));
    else

        res.send("Invalid Login");




   })



})

app.post("/signup",(req,res)=>{

    let users=[];
    fs.readFile("./users.json","utf-8",(err,data)=>{
        if(err)
            users=[];
       else
        users=JSON.parse(data);
    
      let results=  users.filter((item)=>{
            if(item.username==req.body.username)
                return true;
        })
        if(results.length>=1)
            res.send("User already exists")
        else
        {
            users.push({
                username:req.body.username,
                password:req.body.password,
                name:req.body.name
            })
            fs.writeFile("./users.json",JSON.stringify(users),(err)=>{
                if(err)
                    res.send("Unable to create user...")
                else
                    res.send("User created successfully")
            })
        }


    })


})
app.listen(5000,(err)=>{

    if(err)
        console.log("Error in starting Server...")
    else
        console.log("Server Started...")
})