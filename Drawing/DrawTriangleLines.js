function DrawTriangleLines() {
}

DrawTriangleLines.draw = function drawTriangleLines(triangleModel, triangleLinesModel) {
	
	var leftScale = triangleModel.top.subtract(triangleModel.bottomLeft).magnitude() / triangleLinesModel.numberOfSteps;
	var bottomScale = triangleModel.bottomRight.subtract(triangleModel.bottomLeft).magnitude() / triangleLinesModel.numberOfSteps;
	
	DrawTriangle.draw(triangleModel, triangleLinesModel.lineThickness, triangleLinesModel.triangleColor);
	
	
	var topBottomLeftVectorUnit = triangleModel.bottomLeft.subtract(triangleModel.top).normalize().scale(leftScale);
	var bottomLeftToRightVectorUnit = triangleModel.bottomRight.subtract(triangleModel.bottomLeft).normalize().scale(bottomScale);
	
	
	var leftVector = triangleModel.top;
	var bottomVector = triangleModel.bottomLeft;
	
	for(var i = 0; i < triangleLinesModel.numberOfSteps; i++ ) {
		Graphics.drawLine(drawingInformation.brush, leftVector.x, leftVector.y, bottomVector.x, bottomVector.y,  triangleLinesModel.lineThickness, triangleLinesModel.triangleColor );
		
		leftVector = leftVector.add(topBottomLeftVectorUnit);
		bottomVector = bottomVector.add( bottomLeftToRightVectorUnit );
	}	
}