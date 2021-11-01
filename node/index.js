const fs = require('fs');
fs.writeFileSync('./Empty.js', "Demo File", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("It's Run Fine");
}); 
// fs.writeFileSync('/tmp/test-sync', 'Hey there!');
 //read csv file  and transform file data into json object by using node js.