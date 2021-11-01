const fs = require('fs');
fs.writeFileSync('./Empty.js', "Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 


// fs.writeFileSync('/tmp/test-sync', 'Hey there!');