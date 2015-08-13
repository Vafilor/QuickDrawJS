function DrawTriangle() {
}

DrawTriangle.draw = function(triangleModel, thickness, color) {
	Graphics.drawLine(drawingInformation.brush, triangleModel.top.x, triangleModel.top.y, triangleModel.bottomLeft.x, triangleModel.bottomLeft.y, thickness, color);
 	Graphics.drawLine(drawingInformation.brush, triangleModel.top.x, triangleModel.top.y, triangleModel.bottomRight.x, triangleModel.bottomRight.y, thickness, color);
	Graphics.drawLine(drawingInformation.brush, triangleModel.bottomLeft.x, triangleModel.bottomLeft.y, triangleModel.bottomRight.x, triangleModel.bottomRight.y, thickness, color);
}

DrawTriangle.drawNoTopBottomRight = function(triangleModel, thickness, color) {
	Graphics.drawLine(drawingInformation.brush, triangleModel.top.x, triangleModel.top.y, triangleModel.bottomLeft.x, triangleModel.bottomLeft.y, thickness, color);
	Graphics.drawLine(drawingInformation.brush, triangleModel.bottomLeft.x, triangleModel.bottomLeft.y, triangleModel.bottomRight.x, triangleModel.bottomRight.y, thickness, color);
}