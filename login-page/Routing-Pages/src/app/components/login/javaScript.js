
// console.log(fib(6));

//   function fib(num){
//       if(num<= 1){
//           return num;
//       }
//     return fib(num-1)+fib(num-2);
//   }
  
//   console.log(fib(8));

function fibonacci(num) 
{ 
    var value1=0; 

    var value2=1; 

    var sum; 
    for (var i = 1; i <=num; i++)  
    { 
        sum = 0;
        console.log(value1);
        sum=value1+value2; 

        value1=value2;   
        value2=sum;   
        
    }
} 
fibonacci(5)