function DrawingInformation(brush, screenWidth, screenHeight, xOffset, yOffset)
{
	this.brush = brush;
	this.screenWidth = screenWidth;
	this.screenHeight = screenHeight;
	
	if(!xOffset)
	{
		xOffset = screenWidth/2;
	} 
	
	if(!yOffset)
	{
		yOffset = screenHeight/2;
	}
	
	this.xOffset = xOffset;
	this.yOffset = yOffset;
	
	var zAngle = Math.PI/4;
	
	this.zXScalar = Math.cos(zAngle);
	this.zYScalar = Math.sin(zAngle);
}