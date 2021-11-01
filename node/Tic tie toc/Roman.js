//         var RomanValue = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
//          // decimal number
//          var RomanNumber = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
//          function decimalRoman(value) {
//             if (value <= 0 || value >= 4000){
//                   return "Is Greater than 1000 Or less than 1 ";
//             }
               
//                var romanNumeral = "";
//             for (var i = 0; i<RomanValue.length; i++) {
//                while (value >= RomanNumber[i]) {
//                   value -= RomanNumber[i];
//                   romanNumeral += RomanValue[i];
//                   console.log(RomanValue[i],RomanNumber[i]);
//                }
               
//             }      
//             return romanNumeral;
//          }
//          const value = "129";
// console.log(decimalRoman(value));
  






//   const binaryNumber = "110101";
// console.log(parseInt(binaryNumber, 2)); // base 2

// function binaryNumber(num){
//  var value = num*num;
//          console.log(value);
// }
// binaryNumber(12);

// function binaryNumber(arr){
//     var store = "";
//   for(var i = arr.length-1 ;i>=0;i--){
//        store +=  (arr[i]);
//        console.log(store);
//   }
// }
// var array = [1,2,3,4,5,6,7,8,9
// ]
// binaryNumber(array)

// function sum(arr){
//      var total = "";
//    for(var i = 0;i<arr.length; i++){
//      var total = total + arr[i];
//     console.log(total);
//    }

// }
// var arr = [1,12,31,42,5,6,7,81,9];
// var result = sum(arr);

// function sumArray(array) {
//      sum = 0; 
//    for ( var index = 0;index < array.length; sum += array[index++] );
//   return sum;
// }
// var arr = [1, 12, 31, 42, 5, 6, 7, 81, 9];
// sumArray(arr);

// console.log(sumArray(arr));






// var Binary   = (1010101);
//     console.log(Binary);


// var myInt = 10101010101111;
// var intArr = Array.from(String(myInt));

// console.log(intArr[0]);


