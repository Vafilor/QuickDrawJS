//Author: Andrey Melnikov

var drawingInformation = null;
var myCube = new Cube(new Vector3D(0, 0, 0), 50);

function initialize(){
	var canvas = document.getElementById("scene");
	canvas.width = document.body.offsetWidth;
	canvas.height = document.body.offsetHeight;
	var brush = canvas.getContext("2d");

	drawingInformation = new DrawingInformation(brush, canvas.width, canvas.height, 200,200);
	
	setInterval(draw, 20);
	draw();
}

//Get data inputs
function draw()
{
	Graphics.drawFilledRectangle(drawingInformation.brush, 0, 0, drawingInformation.screenWidth, drawingInformation.screenHeight, "#FFFFFF");
	drawCubeWithLines(myCube, 3, "#FF0000", drawingInformation.xOffset, drawingInformation.yOffset);
	myCube.rotateAroundXAxisWithOffset(myCube.center, 0.01);
	myCube.rotateAroundYAxisWithOffset(myCube.center, 0.01);

}

