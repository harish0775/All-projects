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