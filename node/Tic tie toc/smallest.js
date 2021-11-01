// var arr = [4,1,9,5,0];
// 		var smallest = arr[0];

// 		for(var i=1; i<arr.length; i++){
// 			if(arr[i] < smallest){
// 				smallest = arr[i];   
// 			}
// 		}

// 		console.log(smallest);



function smallest(arr){
    var lowest = arr[0];
 
		for(var i=1; i<arr.length; i++){
			if(arr[i] < lowest){
				lowest = arr[i];   
			}       
		}	
		console.log(lowest);
}
 var arr  = [12,23,45,4,78,3];
 smallest(arr)




