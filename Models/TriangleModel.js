//Args: 
//{
//	top,
//	bottomRight,
//	bottomLeft
//}

function TriangleModel( args ) {
	//Validate args, if false, throw exception

	this.top = args.top;
	this.bottomRight = args.bottomRight;
	this.bottomLeft = args.bottomLeft;
}

//Returns triangle model
//Fits triangle inside rectangle defines by topLeft and bottomRight corners
//which are Vector2Ds
//TODO use rectangle object
TriangleModel.createFromBoundingRectangle = function(topLeftCorner, bottomRightCorner) {
	var topVector = new Vector2D( (bottomRightCorner.x + topLeftCorner.x) / 2.0, topLeftCorner.y );
	var bottomLeftVector = new Vector2D( topLeftCorner.x, bottomRightCorner.y);
	var bottomRightVector = new Vector2D( bottomRightCorner.x, bottomRightCorner.y);
	
	return new TriangleModel( {
		top: topVector,
		bottomRight: bottomRightVector,
		bottomLeft: bottomLeftVector
	});
}