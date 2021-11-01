// var fs = require('fs');
// var obj;
// fs.readFile('./file.json', 'utf8', function (err, data) {
//   if (err) throw err;
//   obj = JSON.parse(data);
//   console.log(obj)
// });

var fs = require('fs');
var obj;
var file;
fs.readFile('./array.js','utf8' ,function (err, data) {
  if (err) throw err;
  obj = JSON.stringify(data);
  console.log(obj);
});
