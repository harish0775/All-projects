function Pyramid(n) {
  for (var i = 0; i < n; i++) {
    var space = '1';
    for (var j = 1; j < n-i; j++) {
      space = space + '0';
    }
    for (var k = 1; k <= (2*i+1); k++) {
      space = space + '*';
    }
    console.log(space);
  }
}
Pyramid(23);






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
//                }
               
//             }
//             return romanNumeral;
//          }
//          const value = "11343433"
// console.log(decimalRoman(value));
  