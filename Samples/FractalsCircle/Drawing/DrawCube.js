function drawCubeWithLines(cube, size, color, xOffset, yOffset)
{
	vectors3DInScreenCoordinates = [];
	
	for(var i = 0; i < cube.myPoints.length; i++)
	{
		vectors3DInScreenCoordinates.push( convertVector3DToScreenCoordinates(cube.myPoints[i]) );
	}
		
	Graphics.drawLine(drawingInformation.brush, xOffset + vectors3DInScreenCoordinates[0].x, yOffset + vectors3DInScreenCoordinates[0].y, xOffset + vectors3DInScreenCoordinates[1].x, yOffset + vectors3DInScreenCoordinates[1].y, size, color);
	Graphics.drawLine(drawingInformation.brush, xOffset + vectors3DInScreenCoordinates[0].x, yOffset + vectors3DInScreenCoordinates[0].y, xOffset + vectors3DInScreenCoordinates[2].x, yOffset + vectors3DInScreenCoordinates[2].y, size, color);
	Graphics.drawLine(drawingInformation.brush, xOffset + vectors3DInScreenCoordinates[0].x, yOffset + vectors3DInScreenCoordinates[0].y, xOffset + vectors3DInScreenCoordinates[4].x, yOffset + vectors3DInScreenCoordinates[4].y, size, color);

	Graphics.drawLine(drawingInformation.brush, xOffset + vectors3DInScreenCoordinates[1].x, yOffset + vectors3DInScreenCoordinates[1].y, xOffset + vectors3DInScreenCoordinates[3].x, yOffset + vectors3DInScreenCoordinates[3].y, size, color);
	Graphics.drawLine(drawingInformation.brush, xOffset + vectors3DInScreenCoordinates[1].x, yOffset + vectors3DInScreenCoordinates[1].y, xOffset + vectors3DInScreenCoordinates[5].x, yOffset + vectors3DInScreenCoordinates[5].y, size, color);

	Graphics.drawLine(drawingInformation.brush, xOffset + vectors3DInScreenCoordinates[2].x, yOffset + vectors3DInScreenCoordinates[2].y, xOffset + vectors3DInScreenCoordinates[6].x, yOffset + vectors3DInScreenCoordinates[6].y, size, color);
	Graphics.drawLine(drawingInformation.brush, xOffset + vectors3DInScreenCoordinates[2].x, yOffset + vectors3DInScreenCoordinates[2].y, xOffset + vectors3DInScreenCoordinates[3].x, yOffset + vectors3DInScreenCoordinates[3].y, size, color);

	Graphics.drawLine(drawingInformation.brush, xOffset + vectors3DInScreenCoordinates[7].x, yOffset + vectors3DInScreenCoordinates[7].y, xOffset + vectors3DInScreenCoordinates[3].x, yOffset + vectors3DInScreenCoordinates[3].y, size, color);
	Graphics.drawLine(drawingInformation.brush, xOffset + vectors3DInScreenCoordinates[7].x, yOffset + vectors3DInScreenCoordinates[7].y, xOffset + vectors3DInScreenCoordinates[6].x, yOffset + vectors3DInScreenCoordinates[6].y, size, color);
	Graphics.drawLine(drawingInformation.brush, xOffset + vectors3DInScreenCoordinates[7].x, yOffset + vectors3DInScreenCoordinates[7].y, xOffset + vectors3DInScreenCoordinates[5].x, yOffset + vectors3DInScreenCoordinates[5].y, size, color);

	Graphics.drawLine(drawingInformation.brush, xOffset + vectors3DInScreenCoordinates[4].x, yOffset + vectors3DInScreenCoordinates[4].y, xOffset + vectors3DInScreenCoordinates[5].x, yOffset + vectors3DInScreenCoordinates[5].y, size, color);
	Graphics.drawLine(drawingInformation.brush, xOffset + vectors3DInScreenCoordinates[4].x, yOffset + vectors3DInScreenCoordinates[4].y, xOffset + vectors3DInScreenCoordinates[6].x, yOffset + vectors3DInScreenCoordinates[6].y, size, color);

}