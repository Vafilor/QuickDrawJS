function DrawTriangleLinesMultiple() {
}

DrawTriangleLinesMultiple.draw = function(multipleTriangleLinesModel) {

	//Center point is leftBottom of triangle
	var centerPoint = new Vector2D( drawingInformation.screenWidth / 2, drawingInformation.screenHeight / 2);
	var topPoint = null;
	var bottomRightPoint = null;
	var triangleModel = null;
	var totalRadians = 0.0;
	
	var triangleLinesModel = multipleTriangleLinesModel;
	
	for(var i = 0; i < multipleTriangleLinesModel.numberOfTriangles; i++) {
		var degrees = (i+1) * 360 / multipleTriangleLinesModel.numberOfTriangles;
		var degrees2 = i* 360 / multipleTriangleLinesModel.numberOfTriangles;
		
		topPoint = new Vector2D( multipleTriangleLinesModel.triangleLength, 0).rotate( degreesToRadians(degrees) ).add(centerPoint);
		bottomRightPoint = new Vector2D( multipleTriangleLinesModel.triangleLength, 0).rotate( degreesToRadians(degrees2)).add(centerPoint);
		
		triangleModel = new TriangleModel( {
			top: topPoint,
			bottomRight: bottomRightPoint,
			bottomLeft: centerPoint
		});

		DrawTriangleLines.draw(triangleModel, triangleLinesModel, DrawTriangle, DrawTriangle.drawNoTopBottomRight);
	}

}