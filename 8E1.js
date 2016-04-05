var Greetings=["Hallo","Tschüss", "Begrüßung", "Abschied", "Herzlich Wilkommen", "Grüezi"];
	window.setInterval(function(){
		console.log(Greetings[Math.floor((Math.random())*6)]);
	},6000);
window.clearInterval(Greetings);