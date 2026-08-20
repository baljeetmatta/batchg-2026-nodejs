const express=require("express");
const app=express();
app.use(express.static("."));
app.use(express.urlencoded({extended:true}))
/*
End points


*/
app.listen(5000);