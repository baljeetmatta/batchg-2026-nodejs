//console.log("Javascript...");
const url="https://www.rediff.com";
//module.exports=url
function logger()
{
    console.log("function called")
}

//module.exports=logger;
//module.exports={url:url,logger:logger};
//module.exports={url,logger};
module.exports.endpoint=url;
module.exports.log=logger;




console.log(module);
