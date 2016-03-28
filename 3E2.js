//Exercise 2 Chapter 1

function fn1(){
   
sum1 = 0;
  
for(var i = 0; i < arguments.length; i++) {
     
sum1 += arguments[i];
  
}
  
}


fn1(1, 2, 3, 4, 5, 6, 7);


function fn2(){
   
sum2 = 0;
  
for(var i = 0; i < arguments.length; i++) {
     
sum2 += arguments[i];
  
}
  

}

fn2(5, 6, 7);


result= (sum1+sum2);

console.log("The sum of the colection of numbers is:"+" "+ result);


