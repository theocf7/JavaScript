//Exercise 3 Chapter 1

var myMath = {
  
  
add: function (){
    
a = 0;
  
for( var i = 0; i < arguments.length; i++) {
     
a += arguments[i];
  
}

},

  
mul: function (){
     
b = 1;
  
for( var i = 0; i < arguments.length; i++) {
     
b *= arguments[i];
  
}

},
  
  
fact: function () {
    
var n = arguments[0];
     
r = 0;
    
var fac = function (a) {
      
if (a > 1) {
        
fac.mult *= a;
        
fac(a - 1);
      
}
    
};
    
fac.mult = 1;
    
fac(n);
    
r = fac.mult;       
    
return r;
    
}

};


myMath.add(1,2,3,4,5);

myMath.mul(9,8,7,6);

myMath.fact(5);


console.log ("The sum of the colection of numbers is:"+ " " + a);

console.log ("The multiplication of the colection of numbers is:"+ " " + b);

console.log ("The factorial of your number is:"+ " " + r);





