//Andrey Melnikov
//2.3.2015
//Vector Class

function Vector3D(x, y, z)
{
	this.x = x;
	this.y = y;
	this.z = z;
}

Vector3D.prototype.setX = function(x)
{
	this.x = x;
}

Vector3D.prototype.setY = function(y)
{
	this.y = y;
}

Vector3D.prototype.getX = function() {
	return this.x;
}

Vector3D.prototype.getY = function() {
	return this.y;
}

Vector3D.prototype.add = function( vector )
{
	return new Vector3D( this.x + vector.x, this.y + vector.y, this.z + vector.z );
}

Vector3D.prototype.subtract = function( that ) {
	return new Vector3D( this.x - that.x, this.y - that.y, this.z - that.z );
}

Vector3D.prototype.magnitude = function()
{
	return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );
}

Vector3D.prototype.normalize = function()
{
	var magnitude = this.magnitude();
	return new Vector3D( this.x / magnitude, this.y / magnitude, this.z / magnitude);
}

// that: Vector3D
Vector3D.prototype.dotProduct = function(that) {
	return this.x * that.x + this.y * that.y + this.z * that.z;
}

// that: Vector3D
Vector3D.prototype.getAngleFrom = function(that) {
	return Math.acos( this.dotProduct(that) / ( this.magnitude() * that.magnitude() ) );
}

Vector3D.prototype.scale = function(scalar) {
	return new Vector3D(this.x * scalar, this.y * scalar, this.z * scalar);
}

//For now, assumes that is a Vector3D
//test if same Objecttype
Vector3D.prototype.equals = function(that){
	return this.x == that.x && this.y == that.y && this.z == that.z;
}

Vector3D.prototype.toString = function() {
	return "<" + this.x + "," + this.y + "," + this.z + ">";
}

//Assumes that is a Vector3D
Vector3D.prototype.getDistanceFrom = function(that) {
	return Math.sqrt( (this.x - that.x) * (this.x - that.x) + (this.y - that.y) * (this.y - that.y) + (this.z - that.z) * (this.z - that.z) );
}

Vector3D.prototype.rotateAroundXAxis = function(radians)
{
	return new Vector3D(  this.x , 
					      this.y * Math.cos(radians) + this.z * Math.sin(radians), 
						  this.z * Math.cos(radians) - this.y * Math.sin(radians) 
						);
}

Vector3D.prototype.rotateAroundXAxisWithOffset = function(vector3DOffset, radians)
{
	var moveInVector3D = new Vector3D(  this.x, 
					      this.y - vector3DOffset.y,
						  this.z - vector3DOffset.z
						);
	
	moveInVector3D = moveInVector3D.rotateAroundXAxis(radians);
	
	moveInVector3D.y += vector3DOffset.y;
	moveInVector3D.z += vector3DOffset.z;
	
	return moveInVector3D;
}

Vector3D.prototype.rotateAroundYAxis = function(radians)
{
	return new Vector3D( this.x * Math.cos(radians) + this.z * Math.sin(radians),
						 this.y,
						 this.z * Math.cos(radians) - this.x * Math.sin(radians)
					   );
}

Vector3D.prototype.rotateAroundYAxisWithOffset = function(vector3DOffset, radians)
{
	var moveInVector3D = new Vector3D(  this.x - vector3DOffset.x, 
					      this.y,
						  this.z - vector3DOffset.z
						);
	
	moveInVector3D = moveInVector3D.rotateAroundYAxis(radians);
	
	moveInVector3D.x += vector3DOffset.x;
	moveInVector3D.z += vector3DOffset.z;
	
	return moveInVector3D;
}

Vector3D.prototype.rotateAroundZAxis = function(radians)
{
	return new Vector3D( this.x * Math.cos(radians) + this.y * Math.sin(radians),
						 this.y * Math.cos(radians) - this.x * Math.sin(radians),
						 this.z
					   );
}

Vector3D.prototype.rotateAroundZAxisWithOffset = function(vector3DOffset, radians)
{
	var moveInVector3D = new Vector3D(  this.x - vector3DOffset.x, 
					      this.y - vector3DOffset.y,
						  this.z 
						);
	
	
	
	moveInVector3D = moveInVector3D.rotateAroundZAxis(radians);
	
	moveInVector3D.x += vector3DOffset.x;
	moveInVector3D.y += vector3DOffset.y;
	
	return moveInVector3D;
}