function weekenday(day){
     switch(day){
          case 6:
            return 'saturday';
          case  7: 
            return 'Sunday';
           default :
            return 'Not Found or Is Woring Day';
     }
}
var print = weekenday(1);
console.log(print);


