//Variables to manipulate game
//END Variables to manipulate game

var canvas = null;
var brush = null;

var myVectors = [];
var xVectors = [];
var myCubes = [];

var cake = 0;

	var myCube = new Cube(new Vector3D(0, 0, 0), 50);
	var myCube2 = new Cube(new Vector3D(0, 0, 0), 50);
var myCube3 = new Cube(new Vector3D(0, 0, 0), 50);


	var xUnit = new Vector3D(30, 0, 0);


function initialize(){
	canvas = document.getElementById("scene");
	canvas.width = document.body.offsetWidth;
	canvas.height = document.body.offsetHeight;
	brush = canvas.getContext("2d");
	
	/*myVectors.push(new Vector3D(300, 300, 0));
	myVectors.push(new Vector3D(300, 300, 10));
	myVectors.push(new Vector3D(300, 300, 20));
	myVectors.push(new Vector3D(300, 300, -10));
	myVectors.push(new Vector3D(300, 300, -20));
	*/
	
	var xUnit = new Vector3D(30, 0, 0);
	var yUnit = new Vector3D(0, 30, 0);
	var zUnit = new Vector3D(0, 0, 30);
	
	var numberXVectors = 10;
	
	for(var i = -numberXVectors; i <= numberXVectors; i += 1)
	{
		var y = 10*Math.sqrt( numberXVectors * numberXVectors - i*i );
		xVectors.push( new Vector3D(i*10, y, 0) );
	}
	
	for(var i = 0; i < 360; i++)
	{
		for(var j = 0; j < xVectors.length; j++)
		{
			myVectors.push( xVectors[j].rotateAroundXAxis(i * Math.PI /180) );
			//console.log( xVectors[j].toString());
			//console.log( xVectors[j].rotateAroundXAxis(i * Math.PI /180).toString()  );
		}
	}
	
	/*
	myVectors.push(xUnit);
	myVectors.push(yUnit);
	myVectors.push(zUnit);
	*/
	for(var i = 0; i < 360; i++)
	{
		//myVectors.push( xUnit.rotateAroundZAxis( i * Math.PI/180) );
		//myVectors.push( xUnit.rotateAroundYAxis( i * Math.PI/180) );
		//myVectors.push( yUnit.rotateAroundXAxis( i * Math.PI/180) );
	}
	
	
	//myTriangles.push(new Triangle(new Vector2D(200, 200), new Vector2D(150, 250), new Vector2D(250, 250)));
	var length = 30;
	
	for(var i = 0; i < 5; i++)
	{
		for(var j = 0; j < 5; j++)
		{
			//for(var k = 0; k < 3; k++)
			{
				//myCubes.push(new Cube(new Vector3D(i * length * 2.0, -j * length * 2.0, k * length * 2.0), length));
				myCubes.push(new Cube(new Vector3D(i * length * 2.0, -j * length * 2.0, 0), length));
			}
		}
	}
	
	setInterval(draw, 20);
	draw();
}

//Get data inputs
function draw()
{
	Graphics.drawFilledRectangle(brush, 0, 0, canvas.width, canvas.height, "#FFFFFF");
	//Graphics.drawLine(brush, 0, 200, 800, 200, 2, "#000000");
	//Graphics.drawLine(brush, 0, 400, 400, 0, 2, "#000000");
	//Graphics.drawLine(brush, 200, 0, 200, 800, 2, "#000000");
	/*for(var i = 0; i < 100; i++)
	{
		for(var j = 0; j < 100; j++)
		{
			drawVector3DPoint(new Vector3D(i * 4 + Math.sin(cake*cake + i) + Math.tan(j/200), j * 4 + Math.sin(cake), 100*Math.sin((i*j+i+j*Math.tan(i/200) + cake) )), 2, "#FF0000");
		}
	}*/
	
	//drawVector3D(xUnit.rotateAroundYAxis(cake), 5, "#FF0000");
	//drawVector3D(xUnit.rotateAroundYAxisWithOffset(offsetVector, cake), 5, "#FF0000");
	
	var rotateAmount = 0.01;
	
	for(var i = 0; i < myCubes.length; i++)
	{
		if( i % 3 == 0)
		{	
			myCubes[i].rotateAroundZAxisWithOffset(myCubes[i].getCenter(), rotateAmount);
		} else if(i % 3 == 1)
		{
					myCubes[i].rotateAroundYAxisWithOffset(myCubes[i].getCenter(), rotateAmount);

		} else
		{
					myCubes[i].rotateAroundXAxisWithOffset(myCubes[i].getCenter(), rotateAmount);

		}
				drawCubeWithLines(brush, myCubes[i], 3, "#FF0000", 200, 200);

	}
	
	
	//console.log(myCube.getCenter());
	

	
	cake += 0.01;
}

function drawVector3D( vector, size, color )
{
	var newX = vector.x - vector.z * 0.707106 + 200;
	var newY = -vector.y + vector.z * 0.707106 + 200;
	
	Graphics.drawFilledCircle(brush, newX, newY, size, color);
}

function drawVector2D(vector, size, color) 
{
	Graphics.drawFilledCircle(brush,200 + vector.x, 200+vector.y, size, color);
}

function drawTriangle(triangle, size, color)
{
	drawVector2D(triangle.point1, size, color);
	drawVector2D(triangle.point2, size, color);
	drawVector2D(triangle.point3, size, color);
}

function Triangle(vector1, vector2, vector3)
{
	this.point1 = vector1;
	this.point2 = vector2;
	this.point3 = vector3;
}

function createTriangleFromCenterAndLength(center, length)
{
	
}
