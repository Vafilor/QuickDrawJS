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

	drawingInformation = new DrawingInformation(brush, canvas.width, canvas.height, 0, 0);
	
	this.populateDefaultRuntimeValues(length, length);	
	
	requestDraw();
}

function populateDefaultRuntimeValues(width, height) {
	document.getElementById("menuTriangleWidth").value = width;
	document.getElementById("menuTriangleHeight").value = height;
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
	var triangleHeight = parseInt(document.getElementById("menuTriangleHeight").value);
	var triangleWidth = parseInt(document.getElementById("menuTriangleWidth").value);
	var numberOfSteps = parseFloat(document.getElementById("menuNumberOfSteps").value);
	var triangleColor = document.getElementById("menuTriangleColor").value;
	var backgroundColor = document.getElementById("menuBackgroundColor").value;
	var lineThickness = parseFloat(document.getElementById("menuLineThickness").value );
	
	return new TriangleLinesModel( { 
		triangleHeight : triangleHeight,
		triangleWidth : triangleWidth,
		numberOfSteps : numberOfSteps,
		triangleColor: triangleColor,
		backgroundColor: backgroundColor,
		lineThickness : lineThickness
	});
}

//Assumes valid model
function draw(model)
{
	var padding = 25;
	var triangleModel = TriangleModel.createFromBoundingRectangle( new Vector2D(padding, padding), new Vector2D( model.triangleWidth - padding, model.triangleHeight - padding) );
	
	Graphics.drawFilledRectangle(drawingInformation.brush, 0, 0, drawingInformation.screenWidth, drawingInformation.screenHeight, model.backgroundColor);

	DrawTriangleLinesMultiple.draw(model);
}

function degreesToRadians(degrees) {
	return degrees * Math.PI / 180;
}
