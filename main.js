//Author: Andrey Melnikov

var drawingInformation = null;

function initialize(){
	var canvas = document.getElementById("scene");
	canvas.width = document.body.offsetWidth;
	canvas.height = document.body.offsetHeight;
	var brush = canvas.getContext("2d");

	drawingInformation = new DrawingInformation(brush, canvas.width, canvas.height, 200,200);
	
	//setInterval(draw, 20);
	draw();
}

//Get data inputs
function draw()
{
	var angle = 0;
	var length = 5;
	
	var maxAngle = length * 2*Math.PI;
	
	for(angle = 0; angle < maxAngle; angle += 0.01) {
		var vec = new Vector3D(angle*100, 10*Math.sin(angle));
		

		drawVector2DPoint( vec, 2, "#FF0000");
	}
	

}

