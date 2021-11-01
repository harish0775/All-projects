const fs = require('fs');
 fs.writeFile("./file.json",(err,data)=>{
  if(err){
    console.log(err);
  }
  console.log(data);
});
    
