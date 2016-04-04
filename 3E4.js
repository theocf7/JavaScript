function Image(data,width, height,name){
		if(width * height != data.length)
			alert ("Invalid values");
		this.data = data;
		this.width = width;
		this.height = height;
		this.name = name;
		this.pixelData = function(x,y){
			if(x > this.width || y > this.height || x < 0 || y <0)
				alert("Size is bigger than the image");
			return this.data[x*width + y];
		}
	}
		var colors = ["#ff65ab","green","rgb(120,24,65)","rgba(125,122,12,.3)", "blue","transparent"];
		var data = new Array (1600);
		for(i=0; i< data.length; i++)
		data[i] = colors[Math.floor(Math.random() * colors.length)];
		var img = new Image (data, 40, 40, 'DSC20151201');
		console.log("Width: "+img.width); 
		console.log("Height: "+img.height); 
		console.log("File Name: "+img.name); 
		console.log("Color on the given pixel: "+img.pixelData(13,20)); 
