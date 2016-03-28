// Exercise 2 Chapter 4

var sum = function(arr) {  
  
if (arr.length === 1) {  
    
return arr[0];  
  
}  
  
else {  
    
return arr.pop() + sum(arr);  
  
}  

};  

var array=[ 1, 3, 5, 7];

console.log(sum(array)); 



