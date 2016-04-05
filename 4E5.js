var Distance = function (x1, y1, z1, x2, y2, z2) {
	var Exception = {
		warning: "Not enough parameters"
	};
	var square = function (a) {
		return a * a;
	};
	try {
		if (arguments.length === 6 || arguments.length === 4) {
			if (arguments.length === 4) {
				return Math.sqrt(square(x1 - z1) + square(y1 - x2));
			}
			else {
				return Math.sqrt(square(x2 - x1) + square(y2 - y1) + square(z2 - z1));
			}
		}
		else {
			if (arguments.length<4){
			throw Exception;}
		}
	} catch (e) {
		console.log(e.warning);
		throw e;
	}
};
console.log (Distance (1,0,2,0));
console.log (Distance (1.5857,0,0,3,2,2));
