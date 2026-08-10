//Core Modules os,fs,http,events,path
// const os= require("os");
// //console.log(os);
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.arch());

const fs=require("fs");

// const files=fs.readdirSync(__dirname)
// console.log(files);
// fs.readdir(__dirname,(err,data)=>{
//     console.log(data);
// })

fs.readFile("./script.js","utf-8",(err,data)=>{
    console.log(data);

})

console.log("Hello");
