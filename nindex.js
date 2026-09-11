const express=require("express");
const app=express();
const fs=require("fs");



app.use(express.static("."));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine","ejs");

app.get("/home",(req,res)=>{
    //let data=["one","two","three"]
    let data="Name";

res.render("home",{data});
   // res.render("home");



})
app.get("/users",(req,res)=>{
    //1. Users file ->REad
    //2. EJS ->Data send
    //3. EJS Page->Page Render
    fs.readFile("./users.json","utf-8",(err,data)=>{
        let users=[];
        if(err)
            users=[];
        else
            users=JSON.parse(data);

        res.render("usersList",{users});
        
    })


})

//res.render
app.listen(5000,(err)=>{
    if(!err)
        console.log("Server Started...");

})