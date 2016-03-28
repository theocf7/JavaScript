var dataType = function () {
	if (arguments.length > 0) {
		for (var i = 0; i < arguments.length; i += 1) {
			if (typeof arguments[i] === 'object') {
				console.log('array');
				continue;
			}
			if (typeof arguments[i] === 'number') {
				
				if (Numb(arguments[i])) {
					console.log('number');
				}
				else {
					console.log('float');
				}
				continue;
			}
			console.log(typeof arguments[i]);
		}
	}
	function Numb(a) {
		return Number(a);
	}
};
dataType(1, 6.2831,  "pi*2", [function(){}, 1], {}, function () {});