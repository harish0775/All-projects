const fs = require('fs');
var obj;
fs.readFile('./file.json','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    var value = JSON.stringify(data);
    obj = JSON.parse(value);
    console.log(obj);
});