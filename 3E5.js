function CustomObject (a, b) {
			this.a = a;
			this.b = b;
		}
		CustomObject.prototype.c = function () { return this.a + this.b; };
			var obj = new CustomObject (1, 2);
			Object.prototype.c = 3;
			printObjProp (obj);	//print a,b,c
			printObjProp (obj, false); // output: a, b, c
			printObjProp (obj, true); // output: a, b
		function printObjProp(obj,instance){
			if(instance === undefined)
				instance = false;
			if(!instance){ 
				for(var propertyName in obj) {
					console.log(propertyName);
				}
			}else{
				Object.getOwnPropertyNames(obj)
				.forEach(function(val) {
  					console.log(val);
				});
			}
		}