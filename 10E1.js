var myLib = {
	math: {
		real: {
			add: function (a, b){ /*code goes here*/},
			sub: function (a, b){ /*code goes here*/},
			mul: function (a, b){ /*code goes here*/}
		},
		complex: {
				Num: function (real, img){/*code goes here*/},
			add: function (a, b){ /*code goes here*/},
			sub: function (a, b){ /*code goes here*/},
			mul: function (a, b){ /*code goes here*/}
},
matrix: {
	add: function (a, b){ /*matrix addition*/},
	sub: function (a, b){ /*matrix subtraction*/},
	mul: function (a, b){ /*matrix multiplication*/},
	eye: function (size){ /*identity matrix*/},
	dot: function (m, a){ /*dot product*/},
	times:function(a, b){ /*element-wise multiplication*/}
}
	}
};
//Original functions
var answer = myLib.math.real.sub(myLib.math.real.add (20, 22), myLib.math.real.mul(2,5));

var ans = myLib.math.matrix.times(myLib.math.matrix.eye (4), myLib.math.complex.sub (new myLib.math.complex.Num (myLib.math.real.add(5,2),-3), new myLib.math.complex.Num (3,4)));

// With functions
var answer;
with(myLib.math.real){
	answer=sub(add(20,20), mul(2,5));
}

with (myLib.math) {
	ans = matrix.times(matrix.eye(4), complex.sub(new complex.Num(real.add(5, 2), -3), new complex.Num(3, 4)));
}

//Without with
var answer2;
	var ans2;
	(function(m){
		(function(r){
			answer2 = r.sub(r.add(20,22),r.mul(2,5));
		})(m.real)
		ans2 = m.matrix.times(m.matrix.eye (4), m.complex.sub (new m.complex.Num (m.real.add(5,2),-3), new m.complex.Num (3,4)));
	})(myLib.math);
