function DrawVector3D()
{
	//this.
}

function drawVector3DPoint(vector, size, color )
{
	var newX = vector.x - vector.z * drawingInformation.zXScalar + drawingInformation.xOffset;
	var newY = -vector.y + vector.z * drawingInformation.zYScalar + drawingInformation.yOffset;
	
	Graphics.drawFilledCircle(drawingInformation.brush, newX, newY, size, color);
}

//Returns structure: {x: y:}
function convertVector3DToScreenCoordinates(vector3d)
{
	return {
		x: vector3d.x - vector3d.z * drawingInformation.zXScalar,
		y: -vector3d.y + vector3d.z * drawingInformation.zYScalar
	};
}