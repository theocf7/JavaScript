function myNumber(){
		var number="Invalid value";
		this.setValue = function(a){
		if (typeof a === 'number')
				number = a;
		};
		this.getValue = function(){
			return number;
		};
	}
	var atr = new myNumber();
	atr.setValue(14);
	console.log(atr.getValue());