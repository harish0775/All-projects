 //read csv file  and transform file data into json object by using node js.
 // require csvtojson module
const CSVToJSON = require('csvtojson');

// convert users.csv file to JSON array
CSVToJSON().fromFile('file.csv')
    .then(users => {

        // users is a JSON array
        // log the JSON array
        console.log(users);
    }).catch(err => {
        // log error if any
        console.log(err);
    });