const CSVToJSON = require('csvtojson');

CSVToJSON().fromFile('./file.csv')
    .then(Data=> {
        console.log(Data);
    }).catch(err => {
        console.log(err);
    });