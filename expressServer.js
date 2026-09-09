const express=require("express");
const session=require("express-session")//function
const app=express();
const fs=require("fs");
const uRoutes=require("./routing/userRoutes");
const cors=require("cors");

const path=require("path");
app.use(express.json());

// /dashboard->/user/dashboard , /profile->/user/profile
app.use(express.static("."));
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret:"asdadasdas sa#$#sad54654@#$",
    resave:false,
    saveUninitialized:false,
    cookie:{maxAge:1000*60*60}
}))
app.use("/user",auth, uRoutes);


/* LOGIN ENDPOINTS*/
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"./login.html"));

})
// app.get("/dashboard",auth,(req,res)=>{
//     res.send("Welcome to "+req.session.name);

// //     //res.sendFile(path.join(__dirname,"./Dashboard.html"));
// //     if(req.session.name)
// //     res.send("Welcome to "+req.session.name)
// // else
// //     res.redirect("/login");


// })

// app.get("/profile",auth, (req,res)=>{
//     res.send("Profile Page");

// //     if(req.session.name)
// //     res.send("Profile page");
// // else
// //     res.redirect("/login")


// })

function auth(req,res,next)
{
    if(req.session.name)
        next();
    else
        res.redirect("/login");



}
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
    {
        req.session.name=results[0].name;

        res.redirect("/dashboard");
    }


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



app.post("/loginReact",(req,res)=>{
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
    {
        req.session.name=results[0].name;
        res.json({success:true,message:"Welcome"})
        //res.redirect("/dashboard");
    }


       // res.sendFile(path.join(__dirname,"./Dashboard.html"));
    else
 res.json({success:false,message:"Invalid user/password"})
       // res.send("Invalid Login");
   })
})



app.listen(5000,(err)=>{

    if(err)
        console.log("Error in starting Server...")
    else
        console.log("Server Started...")
})