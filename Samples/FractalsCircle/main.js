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
	Graphics.drawFilledRectangle(drawingInformation.brush, 0, 0, drawingInformation.screenWidth, drawingInformation.screenHeight, "#FFFFFF");

	var bigCircleRadius = 200;
	var smallCircleRadius = getSmallCircleRadius(bigCircleRadius, convertDegreesToRadians(30) );
	var centerPoint = new Vector2D(200, 200);
	
	
	console.log(smallCircleRadius);
	drawCircles(centerPoint, bigCircleRadius, smallCircleRadius, 3, 0, 3)

}

function drawCircles(centerPoint, bigCircleRadius, smallCircleRadius, numberOfCircles, depth, maxDepth)
{
		if( depth >= maxDepth )
		{
			return;
		}
		
		var currentRadians = 0;
		var currentVector = new Vector2D(bigCircleRadius - smallCircleRadius,0);
		//Graphics.drawFilledCircle = function(brush, centerX, centerY, radius, fillColor)
		while(currentRadians < 2*Math.PI)
		{
		//TODO change to drawing information
			Graphics.drawFilledCircle(drawingInformation.brush, currentVector.x + 200, currentVector.y + 200, smallCircleRadius, "#FF0000");
			//numberOfCirclesDrawn++;
			currentRadians += getRadiansGivenNumberOfCircles(numberOfCircles);
			currentVector = currentVector.rotate( getRadiansGivenNumberOfCircles(numberOfCircles)  );
		}
}

function getRadiansGivenNumberOfCircles(numberOfCircles)
{
	return Math.PI / numberOfCircles;
}

function getSmallCircleRadius(bigCircleRadius, angleInRadians)
{
	console.log(bigCircleRadius);
	console.log(angleInRadians);
	return bigCircleRadius * ( Math.sin(angleInRadians) / (1 + Math.sin(angleInRadians) ));
}

function convertDegreesToRadians(degrees)
{
	return degrees * Math.PI/180.0;
}
