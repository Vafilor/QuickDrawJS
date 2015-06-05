function Cube( topLeftVector, length)
{
	this.center = new Vector3D(topLeftVector.x + length/2, topLeftVector.y + length/2, topLeftVector.z + length/2);
	this.myPoints = this.createPoints(topLeftVector, length);
	this.length = length;
}

Cube.prototype.createPoints = function(topLeftVector, length)
{
	var points = [];
	
	//[0,0,0]
	points.push(new Vector3D(topLeftVector.x, topLeftVector.y, topLeftVector.z) );
	//[1,0,0]
	points.push(new Vector3D(topLeftVector.x + length, topLeftVector.y, topLeftVector.z) );
	//[0,0,1]
	points.push(new Vector3D(topLeftVector.x, topLeftVector.y, topLeftVector.z + length) );
	//[1,0,1]
	points.push(new Vector3D(topLeftVector.x + length, topLeftVector.y, topLeftVector.z + length) );

	points.push(new Vector3D(topLeftVector.x, topLeftVector.y + length, topLeftVector.z) );
	points.push(new Vector3D(topLeftVector.x + length, topLeftVector.y + length, topLeftVector.z) );
	points.push(new Vector3D(topLeftVector.x, topLeftVector.y + length, topLeftVector.z + length) );
	points.push(new Vector3D(topLeftVector.x + length, topLeftVector.y + length, topLeftVector.z + length) );	
	
	return points;
};

Cube.prototype.rotateAroundYAxis = function(radians)
{
	for(var i = 0; i < this.myPoints.length; i++)
	{
		this.myPoints[i] = this.myPoints[i].rotateAroundYAxis(radians);
	}
};

Cube.prototype.rotateAroundYAxisWithOffset = function(vector3DOffset, radians)
{
	for(var i = 0; i < this.myPoints.length; i++)
	{
		this.myPoints[i] = this.myPoints[i].rotateAroundYAxisWithOffset(vector3DOffset, radians);
	}
};

Cube.prototype.rotateAroundZAxis = function(radians)
{
	for(var i = 0; i < this.myPoints.length; i++)
	{
		this.myPoints[i] = this.myPoints[i].rotateAroundZAxis(radians);
	}
};

Cube.prototype.rotateAroundZAxisWithOffset = function(vector3DOffset, radians)
{
	for(var i = 0; i < this.myPoints.length; i++)
	{
		this.myPoints[i] = this.myPoints[i].rotateAroundZAxisWithOffset(vector3DOffset, radians);
	}
}

Cube.prototype.rotateAroundXAxis = function(radians)
{
	for(var i = 0; i < this.myPoints.length; i++)
	{
		this.myPoints[i] = this.myPoints[i].rotateAroundXAxis(radians);
	}
}

Cube.prototype.rotateAroundXAxisWithOffset = function(vector3DOffset, radians)
{
	for(var i = 0; i < this.myPoints.length; i++)
	{
		this.myPoints[i] = this.myPoints[i].rotateAroundXAxisWithOffset(vector3DOffset, radians);
	}
}

Cube.prototype.getCenter = function()
{
	return this.center;
}