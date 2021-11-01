// function Pyramid(n) {
//   for (var i = 0; i < n; i++) {
//     var space = '1';
//     for (var j = 0; j >i ; j++) {
//       space = space + '0';
//     }
//     for (var k = 1; k <= (2*i+1); k++) {
//       space = space + '*';
//     }
//     console.log(space);
//   }
// }
// Pyramid(23);

    
// function Pyramid(n) {
//   for (var i = 0; i < n; i++) {
//     var space = '';
//     for (var k = n-i; k >0; k--) {
//       space = space + '*';
//     }
//     for (var j = k-1; j > n-i; j++) {
//       space = space + '0';
//     }
//     console.log(space);
//   }
// }
// Pyramid(5);


// function Pyramid(n) {
//   for (var i = 0; i < n; i++) {
//     var space = '1';
//     for (var j = 1; j < n-i; j++) {
//       space = space + '0';
//     }
//     for (var k = 1; k <= (2*i+1); k++) {
//       space = space + '*';
//     }
//     console.log(space);
//   }
// }
// Pyramid(23);


// function Pyramid(n) {
//   for (var i = 0; i < n; i++) {
//     var space =  '';
//     for (var j = 1; j <=i; j++) {
//       space = space + '0';
//     }
//     for (var k = 0 ; k < n-(i*2); k++) {
//       space = space + '*';
//     }
//   }
// }
// Pyramid(5);







// function pattern(n) {
//   for (var i = 0; i < n; i++) {
//     var space = '';
//     for (var j = 1; j <=i; j++) {
//       space = space + '0';
//     }
//     for (var k = 1; k <=n-i; k++) {
//       space = space + '*';
//     }
//     console.log(space);
//   }
// }
// pattern(15);
function Pyramid(n) {
  for (var i = 0; i < n; i++) {   
    var space = '';
    for (var j = 1; j <=i; j++) {
      space = space + ' ';
    }
    for (var k = n*2-1; k >=2*i+1; k--) {
      space = space + '*';
    }
      console.log(space);
  }
}
Pyramid(20);