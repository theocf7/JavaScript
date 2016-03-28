//Exercise 1 Chapter 4

function fibonacci(n) {
   
if (n < 3){
     
return 1;
   
}
else{
     
return fibonacci(n-2) + fibonacci(n-1);
   
}

}

var n= console.log("Fibonacci result is:" + " " + fibonacci(4));

var m= console.log("Fibonacci result is:" + " " + fibonacci(9));



