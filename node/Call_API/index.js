// const fs = require('fs');


// fs.readFileSync('https://reqres.in/api/users?page=2',utf8,(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     const value = JSON.stringify(data);
//       const obj = JSON.parse(value);
//     console.log(value);
// })
import fetch from '../package.json';

const body = {a: 1};

const response = await fetch('https://httpbin.org/post', {
	method: 'post',
	body: JSON.stringify(body),
	headers: {'Content-Type': 'application/json'}
});
const data = await response.json();

console.log(data);