
var num;
var sum = 0;
function fib(num){
  if(num <=1){
      return 0;
  }
  if(num ==2){
      return 1
  }
  else{
      for (var i =2; i <num; i++) { 
        //  var result=0;
        //  result += (i-1)+(i -2);
        sum = sum +i;
      }
       return sum;
  }
}
console.log(fib(6));

//   function fib(num){
//       if(num<= 1){
//           return num;
//       }
//     return fib(num-1)+fib(num-2);
//   }
  
//   console.log(fib(8));
  


     //  var data = num -1; 
        // //  var value = (num-(i-1)) + (num-(i-2));
        // var store1 = (data -1) + (data -2);   
        //   var store2 = (data -2) + data;     

        //   var result = store1 + store2
