function DrawVector2D()
{
}

function drawVector2DPoint(vector, size, color) 
{
	Graphics.drawFilledCircle(drawingInformation.brush, drawingInformation.xOffset + vector.x,
									 drawingInformation.yOffset + vector.y, size, color);
}