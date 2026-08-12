// const logger= require("./events");
// // const EventEmitter=require("events");
// // const emitter=new EventEmitter();
// // emitter.on("done",()=>{
// //     console.log("Event handled..")
// // })
// logger("My Work");

//version 3
// const events=require("./events");
// events.emitter.on("done",()=>{
//     console.log("Event Handle...")
// })
// events.logger("My Workd")

//version 4
const LoggerClass=require("./events");
const loggerClass=new LoggerClass();
loggerClass.on("done",()=>{
    console.log("Event handled...");
})
loggerClass.logger("My Work");
