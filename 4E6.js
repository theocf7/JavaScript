var Distance = function (x1, y1, z1, x2, y2, z2) {
	var Exception = {
		warning: "Not enough parameters"
	};
	var square = function (a) {
		return a * a;
	};
	if (x1.constructor.name === 'Array') {
		try {
			if (y1.constructor.name === 'Array') {
				if (x1.length === y1.length && x1.length === 2) {
					return Math.sqrt(square(x1[0] - y1[0]) + square((x1[1] - y1[1])));
				}
				if (x1.length == y1.length && x1.length === 3) {
					return Math.sqrt(square(x1[0] - y1[0]) + square((x1[1] - y1[1])) + square(x1[2] - y1[2]));
				}
				else {
					throw Exception;
				}
			}
			else {
				throw Exception;
			}
		} catch (e) {
			console.log(e.warning + ": Incompatible point data");
			throw e;
		}
	}
	else {
		try {
			if (arguments.length === 6 || arguments.length === 4) {
				if (arguments.length === 4) {
					return Math.sqrt(square(z1 - x1) + square(x2 - y1));
				}
				else {
					return Math.sqrt(square(x2 - x1) + square(y2 - y1) + square(z2 - z1));
				}
			}
			else {
				throw Exception;
			}
		} catch (e) {
			console.log(e.warning);
			throw e;
		}
	}
};
 console.log (Distance (1, 2, 2, 2)); 
 console.log (Distance ([1,2], [2,2]));
 console.log (Distance ([1,2], [2,2,4]));