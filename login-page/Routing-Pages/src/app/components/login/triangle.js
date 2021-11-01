



// function triangle(num){
//     for(var i = 0;i<=num;i++){
//      for(var j =0 ; j<=i ;j++){
//          console.log('*');
//      }
//     }
// }
// triangle(5);



//     if( ((num1!=num2) &&(num1>num2)&&(num1>num3)) ||((num2!=num1) &&(num2>num1)&&(num2>num3))||((num3!=num1) &&(num3>num1)&&(num3>num1)) ){



function isgreater(num1,num2,num3){
         var num1;
         var num2;
         var num3;
         let isgreater = true;
   if(num1!=(num2&&num3)&&(num1>num2)&&(num1>num3)){
       isgreater = true;
      console.log("istrue greater than give number= num1")
   }
   else if(num2!=(num2&&num1)&&(num2>num1)&&(num2>num3)){
      isgreater = true;
       console.log("istrue greater than give number = num2")
   }
   else if (num3!=(num2&&num2)&&(num3>num1) &&(num3>num2)){
        isgreater = true;
     console.log("istrue greater than give number = num3")
   }
   else{
       isgreater = false;
        console.log("All Three Number are Same")
   }
}

isgreater(1,2,2);



// function isgreater(num1,num2,num3){
//          var num1;
//          var num2;
//          var num3;
//          let isgreater = true;
//    if(num1>num2&& num1>num3){
//        isgreater = true;
//       console.log("istrue greater than give number= num1")
//    }
//    else if((num2>num1)&&(num2>num1)&&(num2>num3)){
//       isgreater = true;
//        console.log("istrue greater than give number = num2")
//    }
//    else if ((num3>num1) &&(num3>num2)){
//         isgreater = true;
//      console.log("istrue greater than give number = num3")
//    }
//    else{
//        isgreater = false;
//         console.log("All Three Number are Same")
//    }
// }

// isgreater(1,2,2);


