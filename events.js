 //const EventEmitter= require("events");
 //console.log(events);
 //EventEmitter emitter=new EventEmitter();
//EventEmitter emitter;//Reference ->null->new Emitter();
// const emitter=new EventEmitter();
// // Event
// emitter.emit("customMessage");//Raise

// emitter.on("customMessage",(data)=>{//Handle
//     console.log("Event handled...",data)
// })
// emitter.emit("customMessage",{data:10});

//VERSION 2

// const EventEmitter=require("events");
// const emitter=new EventEmitter();
// function logger(message)
// {
//     console.log(message);
//     emitter.emit("done");//Raise
// }
// //module.exports=logger;
// module.exports.logger=logger;
// module.exports.emitter=emitter;




//VERSION 3
const EventEmitter=require("events");
class LoggerClass extends EventEmitter
{

   
     logger(message)
    {
        console.log(message);
        this.emit("done")
    }
}
module.exports=LoggerClass;
