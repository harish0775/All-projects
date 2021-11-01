const fs = require('fs');
var data = {
    name : "Harish",
    Section : "213unwd",
    Branch : "Master",
    CreateAt :"23jAugust"
};
const obj = JSON.stringify(data);

fs.writeFile("./file.json",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("done");
    })









// function Pyramid(n) {
//   for (var i = 0; i < n; i++) {
//     var space = '1';
//     for (var j = 1; j < n-i; j++) {
//       space = space + '0';
//     }
//     for (var k = 1; k <= (2*i+1); k++) {
//       space = space + '*';
//     }
//     console.log(space);
//   }
// }
// Pyramid(23);