//Variables to manipulate game
//END Variables to manipulate game

var canvas = null;
var brush = null;

var myVectors = [];
var xVectors = [];
var myTriangles = [];

var myCube = new Cube(new Vector3D(0, 0, 0), 50);
var myCube2 = new Cube(new Vector3D(0, 0, 0), 50);
var myCube3 = new Cube(new Vector3D(0, 0, 0), 50);

function initialize(){
	canvas = document.getElementById("scene");
	brush = canvas.getContext("2d");

	setInterval(draw, 20);
	draw();
}

function draw()
{
	//Draw x,y,z axisZ
	//Graphics.drawLine(brush, 200, 0, 200, 800, 2, "#000000");
	//Graphics.drawLine(brush, 0, 200, 800, 200, 2, "#000000");
	//Graphics.drawLine(brush, 0, 400, 400, 0, 2, "#000000");

	
	//Graphics.drawFilledRectangle(brush, 0, 0, 800, 600, "#FFFFFF");

	
	for(var i = 0; i < myCube.myPoints.length; i++)
	{
		myCube.myPoints[i]  = myCube.myPoints[i].rotateAroundXAxis(0.01);
		myCube2.myPoints[i] = myCube2.myPoints[i].rotateAroundYAxis(0.01);
		myCube3.myPoints[i] = myCube3.myPoints[i].rotateAroundZAxis(0.01);
	}
	
	drawCubeWithLines(brush, myCube, 2, "#FF0000", 200, 200);
	drawCubeWithLines(brush, myCube2, 2, "#FF0000", 200, 200);
	drawCubeWithLines(brush, myCube3, 2, "#FF0000", 200, 200);
}
