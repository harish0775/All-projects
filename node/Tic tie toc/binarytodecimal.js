// const binaryNumber = "110101";
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

// function  Binarysum(num){

// var intArr = Array.from(String(num));

// var length = intArr.length;
// console.log("intArr Length",length);
// // console.log("intArr Length",length[i]);

// var arr = new Array(length);

// console.log(arr);

// for(var i = 0;i<intArr.length;i++){
//   // var sum = 0;
//    var result = (intArr[i]*i);
//   //  sum += intArr[i++]
//   //  console.log(sum);
//     console.log(result);
// }
// }
// var myInt = 1101101010101;
// Binarysum(myInt);

// const usingSpread = [...string];
// const usingArrayFrom = Array.from(string);

//

function binaryToDecimal(string) {
  let decimal = 0;
  let bits = 1;
  for (var i = 0; i < string.length; i++) {
    var Num = +string[string.length - i-1];
    console.log(Num);
    if (Num === 1) {
      decimal += bits;
      console.log(decimal);
    }
    bits *= 2;
    console.log("bits" + bits);
  }
  console.log(decimal);
}
binaryToDecimal("0110");
