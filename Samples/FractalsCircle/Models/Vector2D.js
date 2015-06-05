//Andrey Melnikov
//6.14.2014
//Vector Class

function Vector2D(x, y)
{
	this.x = x;
	this.y = y;
}

Vector2D.prototype.setX = function(x)
{
	this.x = x;
}

Vector2D.prototype.setY = function(y)
{
	this.y = y;
}

Vector2D.prototype.getX = function() {
	return this.x;
}

Vector2D.prototype.getY = function() {
	return this.y;
}

Vector2D.prototype.add = function( vector )
{
	return new Vector2D( this.x + vector.x, this.y + vector.y );
}

Vector2D.prototype.subtract = function( that ) {
	return new Vector2D( this.x - that.x, this.y - that.y );
}

Vector2D.prototype.magnitude = function()
{
	return Math.sqrt( this.x * this.x + this.y * this.y );
}

Vector2D.prototype.normalize = function()
{
	var magnitude = this.magnitude();
	return new Vector2D( this.x / magnitude, this.y / magnitude);
}

// that: Vector2D
Vector2D.prototype.dotProduct = function(that) {
	return this.x * that.x + this.y * that.y;
}

// that: Vector2D
Vector2D.prototype.getAngleFrom = function(that) {
	return Math.acos( this.dotProduct(that) / ( this.magnitude() * that.magnitude() ) );
}

Vector2D.prototype.scale = function(scalar) {
	return new Vector2D(this.x * scalar, this.y * scalar);
}

//For now, assumes that is a Vector2D
//test if same Objecttype
Vector2D.prototype.equals = function(that){
	return this.x == that.x && this.y == that.y;
}

Vector2D.prototype.toString = function() {
	return "<" + this.x + "," + this.y + ">";
}

//Assume that is a Vector2D
Vector2D.prototype.getDistanceFrom = function(that) {
	return Math.sqrt( (this.x - that.x) * (this.x - that.x) + (this.y - that.y) * (this.y - that.y) );
}

Vector2D.prototype.rotate = function(radians)
{
	return new Vector2D(this.x * Math.cos(radians) + this.y * Math.sin(radians),
						this.y * Math.cos(radians) - this.x * Math.sin(radians));
}