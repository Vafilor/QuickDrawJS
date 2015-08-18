//Author: Andrey Melnikov

var drawingInformation = null;

function initialize(){
	var canvas = document.getElementById("scene");
	
	var potentialWidth = document.body.offsetWidth - document.getElementById("menu").offsetWidth;
	var potentialHeight = document.body.offsetHeight;
	var length = Math.min(potentialWidth, potentialHeight);
	
	
	canvas.width = length;
	canvas.height = length;
	var brush = canvas.getContext("2d");

	//Divide by 2 because each image takes about 2 triangles length top to bottom, left to right.
	this.populateDefaultRuntimeValues(length/2);	

	drawingInformation = new DrawingInformation(brush, canvas.width, canvas.height, 0, 0);
	
	
	requestDraw();
}

function populateDefaultRuntimeValues(length) {
	document.getElementById("menuTriangleLength").value = length;
}

function requestDraw()
{
	var data = null;
	
	try {
		data = getInput();
	} catch( exception ) {
		alert(exception);
	}

	draw(data);
}

function getInput() {
	var numberOfTriangles = parseInt(document.getElementById("menuNumberOfTriangles").value);
	var numberOfSteps = parseFloat(document.getElementById("menuNumberOfSteps").value);
	var triangleColor = document.getElementById("menuTriangleColor").value;
	var triangleLength = parseFloat(document.getElementById("menuTriangleLength").value);
	var backgroundColor = document.getElementById("menuBackgroundColor").value;
	var lineThickness = parseFloat(document.getElementById("menuLineThickness").value );
	
	
	return new MultipleTriangleLinesModel( { 
		numberOfTriangles : numberOfTriangles,
		numberOfSteps : numberOfSteps,
		triangleColor: triangleColor,
		backgroundColor: backgroundColor,
		lineThickness : lineThickness,
		triangleLength: triangleLength
	});
}

//Assumes valid model
function draw(model)
{
	var padding = 25;
	
	Graphics.drawFilledRectangle(drawingInformation.brush, 0, 0, drawingInformation.screenWidth, drawingInformation.screenHeight, model.backgroundColor);

	DrawTriangleLinesMultiple.draw(model);
}

function degreesToRadians(degrees) {
	return degrees * Math.PI / 180;
}
