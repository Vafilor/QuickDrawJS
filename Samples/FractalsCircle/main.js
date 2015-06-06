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
///TODO
	alert("Fractal depth is dangerous!");
}
//Returns an object of data processed
//and a result that marks if true if valid or false if not.
function isValidData()
{
	var numberOfCircles = parseInt(document.getElementById("menuNumberCircles").value);
	var fractalDepth = parseInt(document.getElementById("menuFractalDepth").value);	
	var overlapping = document.getElementById("menuTypeOfCirclesOverlapping").checked;
	var drawLines = document.getElementById("menuDrawLines").checked;
	var drawCircles = document.getElementById("menuDrawCircles").checked;
	
	var isValid = isValidNumberOfCircles(numberOfCircles) &&
				  isValidFractalDepth(fractalDepth)       &&
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
		overlapping: overlapping,
		drawLines: drawLines,
		drawCircles: drawCircles
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
	if( isNaN(numberOfCircles) || !numberOfCircles )
	{
		return false;
	}
	
	return numberOfCircles > 0;
}

function isValidFractalDepth(fractalDepth)
{
	if(!fractalDepth)
	{
		return false;
	}
	
	return fractalDepth > 0;
}

function isValidOverlapping(overlapping)
{
	if( typeof(overlapping) == "undefined")
	{
		return false;
	}
	
	return true;
}

function isValidDrawLines(drawLines)
{
	if(typeof(drawLines) == "undefined")
	{
		return false;
	}
	
	return true;
}

function isValidDrawCircles(drawCircles)
{
	if(typeof(drawCircles) == "undefined")
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
	
	Graphics.drawFilledRectangle(drawingInformation.brush, 0, 0, drawingInformation.screenWidth, drawingInformation.screenHeight, "#FFFFFF");

	var bigCircleRadius = 200;
	var smallCircleRadius = getSmallCircleRadius(bigCircleRadius, convertDegreesToRadians(degrees) );
	
	if(inputData.overlapping) {
		smallCircleRadius = bigCircleRadius / 2;
	}
	
	var centerPoint = new Vector2D(200, 200);
	
	drawCircles(centerPoint, bigCircleRadius, inputData.numberOfCircles, 0, inputData.fractalDepth, inputData.drawLines, inputData.drawCircles, inputData.overlapping);

}

function drawCircles(centerPoint, bigCircleRadius, numberOfCircles, depth, maxDepth, drawLines, doDrawCircles, overlappingCircles)
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
				Graphics.drawCircle(drawingInformation.brush, centerPoint.x + 200, centerPoint.y + 200, bigCircleRadius, 2, "#FF0000"); //TODO dynamic width
			}
			
			if(drawLines) {
				Graphics.drawLine(drawingInformation.brush, centerPoint.x + 200, centerPoint.y + 200, currentChildCenter.x + 200, currentChildCenter.y + 200, 2, "#000000");
			}
			
			drawCircles(currentChildCenter, smallCircleRadius, numberOfCircles, depth + 1, maxDepth, drawLines, doDrawCircles, overlappingCircles );
			
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
