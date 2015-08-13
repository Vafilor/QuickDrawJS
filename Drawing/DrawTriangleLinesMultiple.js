function DrawTriangleLinesMultiple() {
}

DrawTriangleLinesMultiple.draw = function(triangleLinesModel) {
	var numberOfTriangles = 5;
	var triangleLength = 450;
	
	//Center point is leftBottom of triangle
	var centerPoint = new Vector2D( drawingInformation.screenWidth / 2, drawingInformation.screenHeight / 2);
	var topPoint = null;
	var bottomRightPoint = null;
	var triangleModel = null;
	var totalRadians = 0.0;
	
	
	for(var i = 0; i < numberOfTriangles; i++) {
		var degrees = (i+1) * 360 / numberOfTriangles;
		var degrees2 = i* 360 / numberOfTriangles;
		
		topPoint = new Vector2D( triangleLength, 0).rotate( degreesToRadians(degrees) ).add(centerPoint);
		bottomRightPoint = new Vector2D( triangleLength, 0).rotate( degreesToRadians(degrees2)).add(centerPoint);
		
		triangleModel = new TriangleModel( {
			top: topPoint,
			bottomRight: bottomRightPoint,
			bottomLeft: centerPoint
		});

		DrawTriangleLines.draw(triangleModel, triangleLinesModel);

		totalRadians = i * 360 / numberOfTriangles * Math.PI / 180;
	}

}