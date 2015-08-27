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
	
	draw();
}

function requestDraw()
{
	var data = isValidData();

	if( data.result )
	{
		//TODO validate depth is an integer		
		if( isDepthDangerous( data.fractalDepth ) ) 
		{
			var continueDrawing = displayDepthWarning();
			
			if(!continueDrawing)
			{
				return;
			}
		}
		
		draw();
		
	} else
	{
		alert("Error, you have invalid fields.");
	}
}

function isDepthDangerous(depth)
{
	if(depth)
	{
		return depth > 6;
	}
	
	return true;
}

function displayDepthWarning()
{
	alert("Fractal depth is dangerous!");
}
//Returns an object of data processed
//and a result that marks if true if valid or false if not.
function isValidData()
{
	var numberOfCircles = parseInt(document.getElementById("menuNumberCircles").value);
	var fractalDepth = parseInt(document.getElementById("menuFractalDepth").value);	
	var lineLength = parseFloat(document.getElementById("menuLineLength").value);
	var circleWidth = parseFloat(document.getElementById("menuCircleWidth").value);
	var overlapping = document.getElementById("menuTypeOfCirclesOverlapping").checked;
	var drawLines = document.getElementById("menuDrawLines").checked;
	var drawCircles = document.getElementById("menuDrawCircles").checked;
	var backgroundColor = document.getElementById("menuBackgroundColor").value;
	var foregroundColor = document.getElementById("menuForegroundColor").value;
	
	var isValid = isValidNumberOfCircles(numberOfCircles) &&
				  isValidFractalDepth(fractalDepth)       &&
				  isValidLineLength(lineLength)			  &&
				  isValidCircleWidth(circleWidth)		  &&
				  isValidOverlapping(overlapping)         &&
				  isValidDrawLines(drawLines)             &&
				  isValidDrawCircles(drawCircles);		
	
/*	
	console.log(isValidNumberOfCircles(numberOfCircles));
	console.log(isValidFractalDepth(fractalDepth));
	console.log(isValidOverlapping(overlapping) );
	console.log(isValidDrawLines(drawLines)     );
	console.log(isValidDrawCircles(drawCircles));
	console.log(isValid);
*/
	
	var results = {
		result: isValid,
		numberOfCircles: numberOfCircles,
		fractalDepth: fractalDepth,
		lineLength: lineLength,
		circleWidth: circleWidth,
		overlapping: overlapping,
		drawLines: drawLines,
		drawCircles: drawCircles,
		backgroundColor: backgroundColor,
		foregroundColor: foregroundColor
	};
	
	return results;
	
	
	/* Debugging
	
	*/
	//TODO move to comment above
	/*console.log("Number of Circles:" + numberOfCircles);
	console.log("Fractal Depth:" + fractalDepth);
	console.log("Overlapping:" + overlapping);
	console.log("Draw Lines:" + drawLines);
	*/
	//Validate results - make sure NAN is not passed in
	
	
}

function isValidNumberOfCircles(numberOfCircles)
{	
	return !isNaN(numberOfCircles) && numberOfCircles > 0;
}

function isValidFractalDepth(fractalDepth)
{	
	return !isNaN(fractalDepth) && fractalDepth > 0;
}

function isValidOverlapping(overlapping)
{
	return typeof(overlapping) != "undefined";
}

function isValidDrawLines(drawLines)
{
	return typeof(drawLines) != "undefined";
}

function isValidDrawCircles(drawCircles)
{
	return typeof(drawCircles) != "undefined";
}

function isValidLineLength(lineLength) {
	return typeof(lineLength) != "undefined" && 
		   !isNaN(lineLength);
}

function isValidCircleWidth(circleWidth) {
	if(typeof(circleWidth) == "undefined" || isNaN(circleWidth) || circleWidth < 0) 
	{
		return false;
	}
	
	return true;
}

//Get data inputs
function draw()
{
	/*
	
		var results = {
		result: isValid,
		numberOfCircles: numberOfCircles,
		fractalDepth: fractalDepth,
		overlapping: overlapping,
		drawLines: drawLines,
		drawCircles: drawCircles
	};
	
	*/
	var inputData = isValidData();
	
	if(!inputData.result) {
		console.log("Error");
	}
	
	var degrees = convertNumberOfCirclesToDegrees(inputData.numberOfCircles);
	
	Graphics.drawFilledRectangle(drawingInformation.brush, 0, 0, drawingInformation.screenWidth, drawingInformation.screenHeight, inputData.backgroundColor);

	var bigCircleRadius = drawingInformation.screenWidth / 2.0 - 20;
	var smallCircleRadius = getSmallCircleRadius(bigCircleRadius, convertDegreesToRadians(degrees) );
	
	if(inputData.overlapping) {
		smallCircleRadius = bigCircleRadius / 2;
	}
	
	var centerPoint = new Vector2D(Math.round(drawingInformation.screenWidth / 2), Math.round(drawingInformation.screenHeight / 2 ));
	
	var startTime = Date.now();
	
	drawCircles(centerPoint, bigCircleRadius, inputData.numberOfCircles, 0, inputData.fractalDepth, inputData.drawLines, inputData.drawCircles, inputData.overlapping, inputData.lineLength, inputData.circleWidth, inputData.foregroundColor);

	var endTime = Date.now();
	
	var elapsedTime = (endTime - startTime)/1000;
	
	//Approximate time measurement
	//alert("Time taken (Seconds):" + elapsedTime); 
	
}

function drawCircles(centerPoint, bigCircleRadius, numberOfCircles, depth, maxDepth, drawLines, doDrawCircles, overlappingCircles, lineLength, circleWidth, color)
{
		if( depth > maxDepth )
		{
			return;
		}
				
		var currentRadians = 0.0;
		var currentChildCenter = null;
		var smallCircleRadius = bigCircleRadius / 2;
		
		if(!overlappingCircles) {
			smallCircleRadius = getSmallCircleRadius(bigCircleRadius, getRadiansGivenNumberOfCircles(numberOfCircles)/2 );
		}

		var currentVector = new Vector2D(bigCircleRadius - smallCircleRadius,0); 

				
		while(currentRadians < 2*Math.PI)
		{
			currentChildCenter = centerPoint.add(currentVector.rotate(currentRadians));
			
			if(doDrawCircles) {
				Graphics.drawCircle(drawingInformation.brush, Math.floor(centerPoint.x), Math.floor(centerPoint.y), Math.floor(bigCircleRadius), circleWidth, color); 
			}
			
			if(drawLines) {
				var lineEndPoint = centerPoint.add(currentVector.scale(lineLength).rotate(currentRadians));
		
				Graphics.drawLine(drawingInformation.brush, Math.floor(centerPoint.x), Math.floor(centerPoint.y), Math.floor(lineEndPoint.x), Math.floor(lineEndPoint.y), 2, color);
			}
			
			drawCircles(currentChildCenter, smallCircleRadius, numberOfCircles, depth + 1, maxDepth, drawLines, doDrawCircles, overlappingCircles, lineLength );
			
			currentRadians += getRadiansGivenNumberOfCircles(numberOfCircles);
		}
}

function getRadiansGivenNumberOfCircles(numberOfCircles)
{
	return 2*Math.PI / numberOfCircles;
}

function getSmallCircleRadius(bigCircleRadius, angleInRadians)
{
	return bigCircleRadius * ( Math.sin(angleInRadians) / (1 + Math.sin(angleInRadians) ));
}

function convertDegreesToRadians(degrees)
{
	return degrees * Math.PI/180.0;
}

//TODO validate input
function convertNumberOfCirclesToDegrees(numberOfCircles) {
	return 180.0 / numberOfCircles;
}
